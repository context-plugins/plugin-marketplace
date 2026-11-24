from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_processes_api import (
    ValueUiPathOrchestratorProcessesApi,
    ValueUiPathOrchestratorProcessesApiDict,
)


class ODataProcessCollection(SdkBaseModel):
    """OData collection response containing processes"""

    value: Optional[list[ValueUiPathOrchestratorProcessesApi]] = UNSET


class ODataProcessCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorProcessesApiDict]]
