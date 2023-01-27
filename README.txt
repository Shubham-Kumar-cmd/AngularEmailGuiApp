npm install -g @angular/cli => To install angular

ng new my-first-project => To create new project
cd my-first-project
ng serve => To start the project

ng build my-app -c production => this is use at the time of production

ng add @angular/material => To add css angular material

PS G:\java\angular\AngularEmailGuiApp\src\app\components> ng g component navbar        
CREATE src/app/components/navbar/navbar.component.html (21 bytes)
CREATE src/app/components/navbar/navbar.component.spec.ts (599 bytes)
CREATE src/app/components/navbar/navbar.component.ts (202 bytes)
CREATE src/app/components/navbar/navbar.component.css (0 bytes)
UPDATE src/app/app.module.ts (595 bytes)

PS G:\java\angular\AngularEmailGuiApp\src\app\components> ng g component home  
CREATE src/app/components/home/home.component.html (19 bytes)
CREATE src/app/components/home/home.component.spec.ts (585 bytes)
CREATE src/app/components/home/home.component.ts (194 bytes)
CREATE src/app/components/home/home.component.css (0 bytes)
UPDATE src/app/app.module.ts (680 bytes)

PS G:\java\angular\AngularEmailGuiApp\src\app\components> ng g component email
CREATE src/app/components/email/email.component.html (20 bytes)
CREATE src/app/components/email/email.component.spec.ts (592 bytes)
CREATE src/app/components/email/email.component.ts (198 bytes)
CREATE src/app/components/email/email.component.css (0 bytes)
UPDATE src/app/app.module.ts (769 bytes)

PS G:\java\angular\AngularEmailGuiApp\src\app\components> cd ..       
PS G:\java\angular\AngularEmailGuiApp\src\app> cd services
PS G:\java\angular\AngularEmailGuiApp\src\app\services> ng g service email       
CREATE src/app/services/email.service.spec.ts (352 bytes)
CREATE src/app/services/email.service.ts (134 bytes)