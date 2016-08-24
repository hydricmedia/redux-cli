
export const <%= constantEntityName %> = '<%= camelEntityName %>'

export class <%= pascalEntityName %> {
    constructor () {
      'ngInject';

      this.templateUrl = 'app/components/<%= camelEntityName %>/_<%= camelEntityName %>.html';
      this.scope = false;
      this.restrict = 'E';
      this.replace = true;

    }

    compile() {

    }

    link() {

    }

  }
