from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CreateStateMachineAliasOutput(SdkBaseModel):
    state_machine_alias_arn: str = Field(alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) that identifies the created state machine alias."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the state machine alias was created."""


class CreateStateMachineAliasOutputDict(TypedDict):
    state_machine_alias_arn: str
    creation_date: RFC3339DateTime
