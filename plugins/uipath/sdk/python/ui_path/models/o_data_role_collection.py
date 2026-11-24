from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_roles_api import ValueUiPathOrchestratorRolesApi, ValueUiPathOrchestratorRolesApiDict


class ODataRoleCollection(SdkBaseModel):
    """OData collection response containing roles"""

    value: Optional[list[ValueUiPathOrchestratorRolesApi]] = UNSET


class ODataRoleCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorRolesApiDict]]
