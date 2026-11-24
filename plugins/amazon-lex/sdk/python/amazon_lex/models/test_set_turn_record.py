from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .turn_specification import TurnSpecification, TurnSpecificationDict


class TestSetTurnRecord(SdkBaseModel):
    record_number: int = Field(alias="recordNumber")
    """The record number associated with the turn."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """The unique identifier for the conversation associated with the turn."""

    turn_number: Optional[int] = Field(default=UNSET, alias="turnNumber")
    """The number of turns that has elapsed up to that turn."""

    turn_specification: TurnSpecification = Field(alias="turnSpecification")


class TestSetTurnRecordDict(TypedDict):
    record_number: int
    conversation_id: NotRequired[str]
    turn_number: NotRequired[int]
    turn_specification: TurnSpecificationDict
