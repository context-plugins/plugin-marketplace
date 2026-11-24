from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteStateMachineInput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine to delete."""


class DeleteStateMachineInputDict(TypedDict):
    state_machine_arn: str
