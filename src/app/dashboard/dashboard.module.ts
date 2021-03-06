import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'

import 'jquery.animate-number/jquery.animateNumber.js'

import { Dashboard } from './dashboard.component.ts'
import { WidgetModule } from '../layout/widget/widget.module'

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule
  ],
  declarations: [
    Dashboard
  ]
})
export default class DashboardModule {
  static routes = routes
}
