export default {
  items: [
    {
      name: 'Inicio',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
      }
    },
    {
      divider: true
    },
    {
      name: 'Usuarios',
      url: '/usuarios',
      icon: 'fa fa-user',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      divider: true
    },
    {
      name: 'Administrar',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Perfil',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Configuración de Otelo',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
      ]
    },
  ]
};
