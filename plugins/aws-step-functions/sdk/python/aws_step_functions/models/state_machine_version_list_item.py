from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StateMachineVersionListItem(SdkBaseModel):
    state_machine_version_arn: str = Field(alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a combination of state
    machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The creation date of a state machine version."""


class StateMachineVersionListItemDict(TypedDict):
    state_machine_version_arn: str
    creation_date: RFC3339DateTime
