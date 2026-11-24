from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_recommendation_status import BotRecommendationStatusOrStr


class StopBotRecommendationResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot containing the bot recommendation that is being stopped."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot containing the recommendation that is being stopped."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale of the bot response to stop. The string must match one of the supported
    locales. For more information, see Supported languages"""

    bot_recommendation_status: Optional[BotRecommendationStatusOrStr] = Field(
        default=UNSET, alias="botRecommendationStatus"
    )
    """The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the
    failureReasons field."""

    bot_recommendation_id: Optional[str] = Field(default=UNSET, alias="botRecommendationId")
    """The unique identifier of the bot recommendation that is being stopped."""


class StopBotRecommendationResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_recommendation_status: NotRequired[BotRecommendationStatusOrStr]
    bot_recommendation_id: NotRequired[str]
