from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .utterance_specification import UtteranceSpecification, UtteranceSpecificationDict


class ListUtteranceAnalyticsDataResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that the utterances belong to."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the
    maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the
    ListUtteranceAnalyticsData operation until the nextToken returned in the response is null."""

    utterances: Optional[list[UtteranceSpecification]] = UNSET
    """A list of objects, each of which contains information about an utterance in a user session with your bot."""


class ListUtteranceAnalyticsDataResponseDict(TypedDict):
    bot_id: NotRequired[str]
    next_token: NotRequired[str]
    utterances: NotRequired[list[UtteranceSpecificationDict]]
