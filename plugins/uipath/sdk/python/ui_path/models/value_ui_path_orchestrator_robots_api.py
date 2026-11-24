from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueUiPathOrchestratorRobotsApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique robot identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Robot display name"""

    machine_name: Optional[str] = Field(default=UNSET, alias="MachineName")
    """Hostname of the machine the robot is registered on"""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """Robot licensing type"""

    is_connected: Optional[bool] = Field(default=UNSET, alias="IsConnected")
    """Whether the robot is currently connected to Orchestrator"""


class ValueUiPathOrchestratorRobotsApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    machine_name: NotRequired[str]
    type_: NotRequired[str]
    is_connected: NotRequired[bool]
