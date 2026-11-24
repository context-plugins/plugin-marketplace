from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteStateMachineAliasInput(SdkBaseModel):
    state_machine_alias_arn: str = Field(alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) of the state machine alias to delete."""


class DeleteStateMachineAliasInputDict(TypedDict):
    state_machine_alias_arn: str
