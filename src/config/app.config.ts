interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Payroll Officer', 'Team Lead'],
  tenantName: 'Organization',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Interact with the Organization without belonging to it.'],
  ownerAbilities: [
    'Manage Organization',
    'Invite HR Manager, Employee, Payroll Officer, and Team Lead to the application',
  ],
};
