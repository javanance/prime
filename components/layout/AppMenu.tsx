import AppSubMenu from './AppSubMenu';
import type { MenuModel } from '@/types/types';

const AppMenu = (
    {
        menus
    }: {
        menus: MenuModel[]
      }
) => {
     
    const model: MenuModel[] = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'Sales Dashboard',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Analytics Dashboard',
                    icon: 'pi pi-fw pi-chart-pie',
                    to: '/dashboards/dashboardanalytics'
                },
                {
                    label: 'SaaS Dashboard',
                    icon: 'pi pi-fw pi-bolt',
                    to: '/dashboards/dashboardsaas'
                },
                {
                    label: 'Clickme',
                    icon: 'pi pi-fw pi-bolt',
                    to: '/posts/click-me'
                },
                {
                    label: 'Kics Clickme',
                    icon: 'pi pi-fw pi-bolt',
                    to: '/kics/click-me'
                }
            ]
        },
        
    ];

    const model2 = menus? model: menus;

    return <AppSubMenu model={menus} />;
};

export default AppMenu;
