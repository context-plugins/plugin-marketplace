from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_recognizer_summary import EntityRecognizerSummary, EntityRecognizerSummaryDict


class ListEntityRecognizerSummariesResponse(SdkBaseModel):
    entity_recognizer_summaries_list: Optional[list[EntityRecognizerSummary]] = Field(
        default=UNSET, alias="EntityRecognizerSummariesList"
    )
    """The list entity recognizer summaries."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListEntityRecognizerSummariesResponseDict(TypedDict):
    entity_recognizer_summaries_list: NotRequired[list[EntityRecognizerSummaryDict]]
    next_token: NotRequired[str]
