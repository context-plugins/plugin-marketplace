from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublishStateMachineVersionInput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Only publish the state machine version if the current state machine's revision ID matches the specified ID. Use
    this option to avoid publishing a version if the state machine changed since you last updated it. If the specified
    revision ID doesn't match the state machine's current revision ID, the API returns ConflictException. To specify an
    initial revision ID for a state machine with no revision ID assigned, specify the string INITIAL for the revisionId
    parameter. For example, you can specify a revisionID of INITIAL when you create a state machine using the
    CreateStateMachine API action."""

    description: Optional[str] = UNSET
    """An optional description of the state machine version."""


class PublishStateMachineVersionInputDict(TypedDict):
    state_machine_arn: str
    revision_id: NotRequired[str]
    description: NotRequired[str]
