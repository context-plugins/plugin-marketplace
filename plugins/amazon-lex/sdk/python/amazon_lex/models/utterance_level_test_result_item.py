from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_turn_result import TestSetTurnResult, TestSetTurnResultDict


class UtteranceLevelTestResultItem(SdkBaseModel):
    record_number: int = Field(alias="recordNumber")
    """The record number of the result."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """The unique identifier for the conversation associated with the result."""

    turn_result: TestSetTurnResult = Field(alias="turnResult")


class UtteranceLevelTestResultItemDict(TypedDict):
    record_number: int
    conversation_id: NotRequired[str]
    turn_result: TestSetTurnResultDict
