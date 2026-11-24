from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetCommandExecutionsInput(SdkBaseModel):
    sandbox_id: str = Field(alias="sandboxId")
    """A sandboxId or sandboxArn."""

    command_execution_ids: list[str] = Field(alias="commandExecutionIds")
    """A comma separated list of commandExecutionIds."""


class BatchGetCommandExecutionsInputDict(TypedDict):
    sandbox_id: str
    command_execution_ids: list[str]
