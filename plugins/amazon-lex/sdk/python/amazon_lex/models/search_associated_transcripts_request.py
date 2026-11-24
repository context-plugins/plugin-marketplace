from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .associated_transcript_filter import AssociatedTranscriptFilter, AssociatedTranscriptFilterDict
from .enums.search_order import SearchOrderOrStr


class SearchAssociatedTranscriptsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot associated with the transcripts that you are searching."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot containing the transcripts that you are searching."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the transcripts to search. The string must match one of the
    supported locales. For more information, see Supported languages"""

    bot_recommendation_id: str = Field(alias="botRecommendationId")
    """The unique identifier of the bot recommendation associated with the transcripts to search."""

    search_order: Optional[SearchOrderOrStr] = Field(default=UNSET, alias="searchOrder")
    """How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending."""

    filters: list[AssociatedTranscriptFilter]
    """A list of filter objects."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of bot recommendations to return in each page of results. If there are fewer results than the
    max page size, only the actual number of results are returned."""

    next_index: Optional[int] = Field(default=UNSET, alias="nextIndex")
    """If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the
    maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the
    next page of results."""


class SearchAssociatedTranscriptsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    bot_recommendation_id: str
    search_order: NotRequired[SearchOrderOrStr]
    filters: list[AssociatedTranscriptFilterDict]
    max_results: NotRequired[int]
    next_index: NotRequired[int]
