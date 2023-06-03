export class usuarioRepository {
  private usuarios = [];

  async criarUsuario(dadosDeCriacao) {
    this.usuarios.push(dadosDeCriacao);
    console.log(this.usuarios);
  }
}
