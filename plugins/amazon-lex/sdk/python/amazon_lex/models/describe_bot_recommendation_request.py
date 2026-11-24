from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotRecommendationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot associated with the bot recommendation."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the bot recommendation."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the bot recommendation to describe. The string must match one of the
    supported locales. For more information, see Supported languages."""

    bot_recommendation_id: str = Field(alias="botRecommendationId")
    """The identifier of the bot recommendation to describe."""


class DescribeBotRecommendationRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    bot_recommendation_id: str
