from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .session_specification import SessionSpecification, SessionSpecificationDict


class ListSessionAnalyticsDataResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that the sessions belong to."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSessionAnalyticsData operation contains more results than specified in the
    maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the
    ListSessionAnalyticsData operation until the nextToken returned in the response is null."""

    sessions: Optional[list[SessionSpecification]] = UNSET
    """A list of objects, each of which contains information about a session with the bot."""


class ListSessionAnalyticsDataResponseDict(TypedDict):
    bot_id: NotRequired[str]
    next_token: NotRequired[str]
    sessions: NotRequired[list[SessionSpecificationDict]]
