from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommended_intent_summary import RecommendedIntentSummary, RecommendedIntentSummaryDict


class ListRecommendedIntentsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot associated with the recommended intent."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the intent."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale of the intents to list. The string must match one of the supported
    locales. For more information, see Supported languages."""

    bot_recommendation_id: Optional[str] = Field(default=UNSET, alias="botRecommendationId")
    """The identifier of the bot recommendation that contains the recommended intent."""

    summary_list: Optional[list[RecommendedIntentSummary]] = Field(default=UNSET, alias="summaryList")
    """Summary information for the intents that meet the filter criteria specified in the request. The length of the
    list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken
    field contains a token to get the next page of results."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListRecommendedIntents
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListRecommendedIntents operation request to get the next page of results."""


class ListRecommendedIntentsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_recommendation_id: NotRequired[str]
    summary_list: NotRequired[list[RecommendedIntentSummaryDict]]
    next_token: NotRequired[str]
