import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChecklistComponent } from "./checklist/checklist.component";
import { RouterModule } from "@angular/router";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { IconsProviderModule } from "../../icons-provider.module";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { TranslateModule } from "@ngx-translate/core";

const routes = [{
  path: "",
  component: ChecklistComponent
}];

@NgModule({
  declarations: [ChecklistComponent],
  exports: [ChecklistComponent],
  imports: [
    CommonModule,

    NzTableModule,

    RouterModule.forChild(routes),
    NzCheckboxModule,
    FormsModule,
    NzButtonModule,
    IconsProviderModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzCollapseModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzStatisticModule,
    NzGridModule,
    NzDividerModule,
    TranslateModule,
  ],
})
export class ChecklistModule {}
