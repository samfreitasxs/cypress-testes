FROM cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1
#Primeiramente, FROMa instrução define uma imagem base, cujas dependências e configurações serão todas incluídas na imagem gerada

WORKDIR /e2e
#WORKDIR: Etapa cria o /e2ediretório de trabalho, no qual todos os comandos subseqüentes serão executados.


COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

#COPY: Instrução, os arquivos package.json e cypress.config.ts , bem como a pasta cypress , 
#incluindo o arquivo spec , serão copiados do repositório para o diretório de trabalho dentro da imagem.

RUN npm i &&\
    npx cypress info

#RUN: A instrução especifica dois comandos a serem executados, em particular
#npm i—:  Para instalar as dependências necessárias no diretório de trabalho da imagem
#npx cypress info—: Para exibir informações sobre o Cypress, navegadores atuais detectados pelo Cypress e assim por diante.    


ENTRYPOINT [ "npx", "cypress", "run" ]
#ENTRYPOINTinstrução, o comando no formulário exec ,é definido para executar o Cypress no modo headless
# em contêineres gerados a partir desta imagem.