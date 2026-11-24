from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_packages_api import (
    ValueUiPathOrchestratorPackagesApi,
    ValueUiPathOrchestratorPackagesApiDict,
)


class ODataPackageCollection(SdkBaseModel):
    """OData collection response containing packages"""

    value: Optional[list[ValueUiPathOrchestratorPackagesApi]] = UNSET


class ODataPackageCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorPackagesApiDict]]
