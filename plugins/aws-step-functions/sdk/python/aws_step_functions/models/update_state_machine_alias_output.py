from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class UpdateStateMachineAliasOutput(SdkBaseModel):
    update_date: RFC3339DateTime = Field(alias="updateDate")
    """The date and time the state machine alias was updated."""


class UpdateStateMachineAliasOutputDict(TypedDict):
    update_date: RFC3339DateTime
