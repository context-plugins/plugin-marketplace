from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UpdateStateMachineOutput(SdkBaseModel):
    update_date: RFC3339DateTime = Field(alias="updateDate")
    """The date and time the state machine was updated."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The revision identifier for the updated state machine."""

    state_machine_version_arn: Optional[str] = Field(default=UNSET, alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) of the published state machine version. If the publish parameter isn't set to
    true, this field returns null."""


class UpdateStateMachineOutputDict(TypedDict):
    update_date: RFC3339DateTime
    revision_id: NotRequired[str]
    state_machine_version_arn: NotRequired[str]
