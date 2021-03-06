import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'

import { WidgetModule } from '../layout/widget/widget.module'
import { UtilsModule } from '../layout/utils/utils.module'
import { Ng2TableModule } from 'ng2-table'

// libs
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js'
import 'messenger/build/js/messenger.js'
import 'jasny-bootstrap/js/inputmask.js'

import { EquipmentRegisterPage } from './register/register.component'
import { EquipmentSearchPage } from './search/search.component'
import { SearchEquipmentTable } from './search/tables/equipment-table.component'
import { SearchPipe } from './search/pipes/search-pipe'

export const routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: EquipmentRegisterPage},
  {path: 'search', component: EquipmentSearchPage}
]

@NgModule({
  declarations: [
    EquipmentRegisterPage,
    EquipmentSearchPage,
    SearchEquipmentTable,
    SearchPipe
  ],
  imports: [
    Ng2TableModule,
    CommonModule,
    FormsModule,
    WidgetModule,
    UtilsModule,
    RouterModule.forChild(routes),
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export default class EquipmentModule {
  static routes = routes
}
