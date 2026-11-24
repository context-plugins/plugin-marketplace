from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_machines_api import (
    ValueUiPathOrchestratorMachinesApi,
    ValueUiPathOrchestratorMachinesApiDict,
)


class ODataMachineCollection(SdkBaseModel):
    """OData collection response containing machines"""

    value: Optional[list[ValueUiPathOrchestratorMachinesApi]] = UNSET


class ODataMachineCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorMachinesApiDict]]
