from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .associated_transcript import AssociatedTranscript, AssociatedTranscriptDict


class SearchAssociatedTranscriptsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot associated with the transcripts that you are searching."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot containing the transcripts that you are searching."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale of the transcripts to search. The string must match one of the
    supported locales. For more information, see Supported languages"""

    bot_recommendation_id: Optional[str] = Field(default=UNSET, alias="botRecommendationId")
    """The unique identifier of the bot recommendation associated with the transcripts to search."""

    next_index: Optional[int] = Field(default=UNSET, alias="nextIndex")
    """A index that indicates whether there are more results to return in a response to the SearchAssociatedTranscripts
    operation. If the nextIndex field is present, you send the contents as the nextIndex parameter of a
    SearchAssociatedTranscriptsRequest operation to get the next page of results."""

    associated_transcripts: Optional[list[AssociatedTranscript]] = Field(default=UNSET, alias="associatedTranscripts")
    """The object that contains the associated transcript that meet the criteria you specified."""

    total_results: Optional[int] = Field(default=UNSET, alias="totalResults")
    """The total number of transcripts returned by the search."""


class SearchAssociatedTranscriptsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_recommendation_id: NotRequired[str]
    next_index: NotRequired[int]
    associated_transcripts: NotRequired[list[AssociatedTranscriptDict]]
    total_results: NotRequired[int]
