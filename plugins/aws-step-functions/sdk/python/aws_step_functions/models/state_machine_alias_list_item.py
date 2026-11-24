from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StateMachineAliasListItem(SdkBaseModel):
    state_machine_alias_arn: str = Field(alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a combination of state
    machine ARN and the alias name separated by a colon (:). For example, stateMachineARN:PROD."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The creation date of a state machine alias."""


class StateMachineAliasListItemDict(TypedDict):
    state_machine_alias_arn: str
    creation_date: RFC3339DateTime
