import { Body, Controller, Post } from '@nestjs/common';
import { usuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new usuarioRepository();

  @Post()
  async criarUsuario(@Body() dadosDeCriacao) {
    await this.usuarioRepository.criarUsuario(dadosDeCriacao);
    return dadosDeCriacao;
  }
}
