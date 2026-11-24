from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .command_execution import CommandExecution, CommandExecutionDict


class StartCommandExecutionOutput(SdkBaseModel):
    command_execution: Optional[CommandExecution] = Field(default=UNSET, alias="commandExecution")


class StartCommandExecutionOutputDict(TypedDict):
    command_execution: NotRequired[CommandExecutionDict]
