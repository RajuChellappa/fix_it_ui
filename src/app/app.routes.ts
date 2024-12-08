import { Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { DiagnosticScannerComponent } from './diagnostic-scanner/diagnostic-scanner.component';
import { FixitKitComponent } from './fixit-kit/fixit-kit.component';
import { VirtualSupportComponent } from './virtual-support/virtual-support.component';

export const routes: Routes = [
    { path: '', component: HomeDashboardComponent },  // Default route
    { path: 'diagnostic', component: DiagnosticScannerComponent },
    { path: 'kit-order', component: FixitKitComponent},
    { path: 'virtual-support', component: VirtualSupportComponent}
];
