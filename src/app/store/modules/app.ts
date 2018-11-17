export interface NavItem {
    label: string
    icon: string
    route: string
}

export interface State {
    navItems: NavItem[]
}

const state: State = {
    navItems: [
        {
            label: 'character',
            icon: '',
            route: '/character',
        },
    ],
}

export default {
    state,
}
