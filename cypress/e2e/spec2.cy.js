describe('Testes da API da Binance', () => {
    // Variáveis para armazenar a chave de API e o segredo
    const apiKey = 'sua_chave_de_api';
    const apiSecret = 'seu_segredo';
  
    it('Deve obter o saldo da conta do usuário', () => {
      // Requisição para obter o saldo da conta do usuário
      cy.request({
        method: 'GET',
        url: 'https://api.binance.com/api/v3/account',
        headers: {
          'X-MBX-APIKEY': apiKey,
        },
        qs: {
          timestamp: Date.now(),
        },
        auth: {
          bearer: apiSecret,
        },
      }).then((response) => {
        // Verifique se a requisição foi bem-sucedida e se o saldo da conta é retornado corretamente
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('balances');
        expect(response.body.balances).to.be.an('array');
      });
    });
  });
  