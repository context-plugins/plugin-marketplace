from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .command_execution import CommandExecution, CommandExecutionDict


class BatchGetCommandExecutionsOutput(SdkBaseModel):
    command_executions: Optional[list[CommandExecution]] = Field(default=UNSET, alias="commandExecutions")
    """Information about the requested command executions."""

    command_executions_not_found: Optional[list[str]] = Field(default=UNSET, alias="commandExecutionsNotFound")
    """The IDs of command executions for which information could not be found."""


class BatchGetCommandExecutionsOutputDict(TypedDict):
    command_executions: NotRequired[list[CommandExecutionDict]]
    command_executions_not_found: NotRequired[list[str]]
