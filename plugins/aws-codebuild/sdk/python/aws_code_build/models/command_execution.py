from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_aws_code_build_command_execution_api import TypeAwsCodeBuildCommandExecutionApiOrStr
from .logs_location import LogsLocation, LogsLocationDict


class CommandExecution(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the command execution."""

    sandbox_id: Optional[str] = Field(default=UNSET, alias="sandboxId")
    """A sandboxId."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="submitTime")
    """When the command execution process was initially submitted, expressed in Unix time format."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the command execution process started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the command execution process ended, expressed in Unix time format."""

    status: Optional[str] = UNSET
    """The status of the command execution."""

    command: Optional[str] = UNSET
    """The command that needs to be executed."""

    type_: Optional[TypeAwsCodeBuildCommandExecutionApiOrStr] = Field(default=UNSET, alias="type")
    """The command type."""

    exit_code: Optional[str] = Field(default=UNSET, alias="exitCode")
    """The exit code to return upon completion."""

    standard_output_content: Optional[str] = Field(default=UNSET, alias="standardOutputContent")
    """The text written by the command to stdout."""

    standard_err_content: Optional[str] = Field(default=UNSET, alias="standardErrContent")
    """The text written by the command to stderr."""

    logs: Optional[LogsLocation] = UNSET
    sandbox_arn: Optional[str] = Field(default=UNSET, alias="sandboxArn")
    """A sandboxArn."""


class CommandExecutionDict(TypedDict):
    id: NotRequired[str]
    sandbox_id: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    status: NotRequired[str]
    command: NotRequired[str]
    type_: NotRequired[TypeAwsCodeBuildCommandExecutionApiOrStr]
    exit_code: NotRequired[str]
    standard_output_content: NotRequired[str]
    standard_err_content: NotRequired[str]
    logs: NotRequired[LogsLocationDict]
    sandbox_arn: NotRequired[str]
