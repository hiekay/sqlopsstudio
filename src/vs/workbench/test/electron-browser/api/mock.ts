/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

export interface Ctor<T> {
	new(): T;
}

export function mock<T>(): Ctor<T> {
	return <any>function () { };
}
