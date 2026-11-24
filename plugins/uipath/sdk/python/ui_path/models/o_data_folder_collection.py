from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_folders_api import (
    ValueUiPathOrchestratorFoldersApi,
    ValueUiPathOrchestratorFoldersApiDict,
)


class ODataFolderCollection(SdkBaseModel):
    """OData collection response containing folders"""

    value: Optional[list[ValueUiPathOrchestratorFoldersApi]] = UNSET


class ODataFolderCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorFoldersApiDict]]
