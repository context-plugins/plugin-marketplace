from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class PublishStateMachineVersionOutput(SdkBaseModel):
    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the version was created."""

    state_machine_version_arn: str = Field(alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) (ARN) that identifies the state machine version."""


class PublishStateMachineVersionOutputDict(TypedDict):
    creation_date: RFC3339DateTime
    state_machine_version_arn: str
