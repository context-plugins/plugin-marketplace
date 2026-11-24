from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_ui_path_orchestrator_machines_api import TypeUiPathOrchestratorMachinesApiOrStr


class ValueUiPathOrchestratorMachinesApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique machine identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name or hostname of the machine"""

    type_: Optional[TypeUiPathOrchestratorMachinesApiOrStr] = Field(default=UNSET, alias="Type")
    """Whether this is a physical machine or a cloud robot template"""

    license_key: Optional[str] = Field(default=UNSET, alias="LicenseKey")
    """License key used by the robot installed on this machine"""


class ValueUiPathOrchestratorMachinesApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    type_: NotRequired[TypeUiPathOrchestratorMachinesApiOrStr]
    license_key: NotRequired[str]
