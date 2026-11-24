from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateStateMachineOutput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) that identifies the created state machine."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the state machine is created."""

    state_machine_version_arn: Optional[str] = Field(default=UNSET, alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not set the publish
    parameter to true, this field returns null value."""


class CreateStateMachineOutputDict(TypedDict):
    state_machine_arn: str
    creation_date: RFC3339DateTime
    state_machine_version_arn: NotRequired[str]
