from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.end_to_end_result2 import EndToEndResult2OrStr


class ConversationLevelTestResultsFilterBy(SdkBaseModel):
    end_to_end_result: Optional[EndToEndResult2OrStr] = Field(default=UNSET, alias="endToEndResult")
    """The selection of matched or mismatched end-to-end status to filter test set results data at the conversation
    level."""


class ConversationLevelTestResultsFilterByDict(TypedDict):
    end_to_end_result: NotRequired[EndToEndResult2OrStr]
