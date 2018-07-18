import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {PostsComponent} from './posts/posts.component';
export const AppRoutes: Routes = [
  { path: '', component: PostsComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

