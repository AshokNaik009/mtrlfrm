import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
        import {MatChipsModule} from '@angular/material/chips';
        import {MatToolbarModule} from '@angular/material/toolbar';
        import {MatButtonModule} from '@angular/material/button';
        import {MatAutocompleteModule} from '@angular/material/autocomplete';
        import {MatSelectModule} from '@angular/material/select';

        // import {MatCardModule} from '@angular/material/card';    

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatNativeDateModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule

    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatChipsModule,
        MatDialogModule,
        MatNativeDateModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule
    ]


})

export class MaterialModule {}
