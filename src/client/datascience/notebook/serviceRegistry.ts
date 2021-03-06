// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { IExtensionSingleActivationService } from '../../activation/types';
import { IServiceManager } from '../../ioc/types';
import { CellEditSyncService } from './cellEditSyncService';
import { NotebookContentProvider } from './contentProvider';
import { NotebookExecutionService } from './executionService';
import { NotebookIntegration } from './integration';
import { NotebookEditorProviderActivation } from './notebookEditorProvider';
import { NotebookKernel } from './notebookKernel';
import { NotebookOutputRenderer } from './renderer';
import { INotebookExecutionService } from './types';

export function registerTypes(serviceManager: IServiceManager) {
    serviceManager.addSingleton<NotebookContentProvider>(NotebookContentProvider, NotebookContentProvider);
    serviceManager.addSingleton<INotebookExecutionService>(INotebookExecutionService, NotebookExecutionService);
    serviceManager.addSingleton<IExtensionSingleActivationService>(
        IExtensionSingleActivationService,
        NotebookIntegration
    );
    serviceManager.addSingleton<NotebookKernel>(NotebookKernel, NotebookKernel);
    serviceManager.addSingleton<NotebookOutputRenderer>(NotebookOutputRenderer, NotebookOutputRenderer);
    serviceManager.addSingleton<IExtensionSingleActivationService>(
        IExtensionSingleActivationService,
        NotebookEditorProviderActivation
    );
    serviceManager.addSingleton<IExtensionSingleActivationService>(
        IExtensionSingleActivationService,
        CellEditSyncService
    );
}
