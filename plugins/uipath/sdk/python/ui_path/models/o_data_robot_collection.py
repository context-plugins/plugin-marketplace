from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_robots_api import (
    ValueUiPathOrchestratorRobotsApi,
    ValueUiPathOrchestratorRobotsApiDict,
)


class ODataRobotCollection(SdkBaseModel):
    """OData collection response containing robots"""

    value: Optional[list[ValueUiPathOrchestratorRobotsApi]] = UNSET


class ODataRobotCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorRobotsApiDict]]
