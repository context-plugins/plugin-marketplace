from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.source import SourceOrStr
from .enums.state import StateOrStr
from .robot_ref import RobotRef, RobotRefDict


class Job(SdkBaseModel):
    """Represents a single automation job execution instance"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier for the job"""

    key: Optional[UUID] = Field(default=UNSET, alias="Key")
    """Unique GUID key for the job"""

    release_name: Optional[str] = Field(default=UNSET, alias="ReleaseName")
    """Name of the process (release) that this job executes"""

    process_version: Optional[str] = Field(default=UNSET, alias="ProcessVersion")
    """Version of the process package used in this job"""

    state: Optional[StateOrStr] = Field(default=UNSET, alias="State")
    """Current execution state of the job"""

    source: Optional[SourceOrStr] = Field(default=UNSET, alias="Source")
    """How the job was initiated"""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """ISO 8601 timestamp when the job started executing"""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """ISO 8601 timestamp when the job finished executing"""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """ISO 8601 timestamp when the job was created"""

    info: Optional[str] = Field(default=UNSET, alias="Info")
    """Additional information or error message associated with the job state"""

    host_machine_name: Optional[str] = Field(default=UNSET, alias="HostMachineName")
    """Name of the machine where the robot executed the job"""

    robot: Optional[RobotRef] = Field(default=UNSET, alias="Robot")
    """A lightweight reference to a robot associated with a job"""

    organization_unit_id: Optional[int] = Field(default=UNSET, alias="OrganizationUnitId")
    """ID of the folder in which this job resides"""

    input_arguments: Optional[str] = Field(default=UNSET, alias="InputArguments")
    """JSON-serialized input arguments passed to the process"""

    output_arguments: Optional[str] = Field(default=UNSET, alias="OutputArguments")
    """JSON-serialized output arguments returned by the process"""


class JobDict(TypedDict):
    id: NotRequired[int]
    key: NotRequired[UUID]
    release_name: NotRequired[str]
    process_version: NotRequired[str]
    state: NotRequired[StateOrStr]
    source: NotRequired[SourceOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    creation_time: NotRequired[RFC3339DateTime]
    info: NotRequired[str]
    host_machine_name: NotRequired[str]
    robot: NotRequired[RobotRefDict]
    organization_unit_id: NotRequired[int]
    input_arguments: NotRequired[str]
    output_arguments: NotRequired[str]
