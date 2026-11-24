from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteStateMachineVersionInput(SdkBaseModel):
    state_machine_version_arn: str = Field(alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) of the state machine version to delete."""


class DeleteStateMachineVersionInputDict(TypedDict):
    state_machine_version_arn: str
