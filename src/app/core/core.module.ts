import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MenuButtonComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
