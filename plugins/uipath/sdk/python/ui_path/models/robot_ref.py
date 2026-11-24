from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_ui_path_orchestrator_jobs_api import TypeUiPathOrchestratorJobsApiOrStr


class RobotRef(SdkBaseModel):
    """A lightweight reference to a robot associated with a job"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier of the robot"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the robot"""

    machine_name: Optional[str] = Field(default=UNSET, alias="MachineName")
    """Hostname of the machine the robot runs on"""

    machine_id: Optional[int] = Field(default=UNSET, alias="MachineId")
    """Unique integer identifier of the machine"""

    version: Optional[str] = Field(default=UNSET, alias="Version")
    """Version of the UiPath Robot software"""

    type_: Optional[TypeUiPathOrchestratorJobsApiOrStr] = Field(default=UNSET, alias="Type")
    """Licensing type of the robot"""


class RobotRefDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    machine_name: NotRequired[str]
    machine_id: NotRequired[int]
    version: NotRequired[str]
    type_: NotRequired[TypeUiPathOrchestratorJobsApiOrStr]
