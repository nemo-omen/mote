import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export function authorize(event: ServerLoadEvent) {
    if (event.locals.user === null) {
        redirect(303, '/auth/login');
    }
}