import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
        import {MatChipsModule} from '@angular/material/chips';
        import {MatToolbarModule} from '@angular/material/toolbar';


        // import {MatCardModule} from '@angular/material/card';    

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatNativeDateModule

    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatChipsModule,
        MatDialogModule,
        MatNativeDateModule
    ]


})

export class MaterialModule {}
