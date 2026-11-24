from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .command_execution import CommandExecution, CommandExecutionDict


class ListCommandExecutionsForSandboxOutput(SdkBaseModel):
    command_executions: Optional[list[CommandExecution]] = Field(default=UNSET, alias="commandExecutions")
    """Information about the requested command executions."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """Information about the next token to get paginated results."""


class ListCommandExecutionsForSandboxOutputDict(TypedDict):
    command_executions: NotRequired[list[CommandExecutionDict]]
    next_token: NotRequired[str]
