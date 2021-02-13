import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class LoadingService {

    //recibe false como valor default
    //la diferencia con el subject es que el behavior retorna siempre un valor
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    showLoaderUntilCompleted<T>(obs$: Observable<T> ): Observable<T>{
        return undefined;
    }

    loadingOn() {
      this.loadingSubject.next(true);
    }

    loadingOff() {
      this.loadingSubject.next(false);
    }
}
