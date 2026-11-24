from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_schedules_api import (
    ValueUiPathOrchestratorSchedulesApi,
    ValueUiPathOrchestratorSchedulesApiDict,
)


class ODataScheduleCollection(SdkBaseModel):
    """OData collection response containing process schedules"""

    value: Optional[list[ValueUiPathOrchestratorSchedulesApi]] = UNSET


class ODataScheduleCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorSchedulesApiDict]]
