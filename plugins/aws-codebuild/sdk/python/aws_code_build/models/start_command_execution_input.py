from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_aws_code_build_command_execution_api import TypeAwsCodeBuildCommandExecutionApiOrStr


class StartCommandExecutionInput(SdkBaseModel):
    sandbox_id: str = Field(alias="sandboxId")
    """A sandboxId or sandboxArn."""

    command: str
    """The command that needs to be executed."""

    type_: Optional[TypeAwsCodeBuildCommandExecutionApiOrStr] = Field(default=UNSET, alias="type")
    """The command type."""


class StartCommandExecutionInputDict(TypedDict):
    sandbox_id: str
    command: str
    type_: NotRequired[TypeAwsCodeBuildCommandExecutionApiOrStr]
