from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_locale_status import BotLocaleStatusOrStr


class BotLocaleSummary(SdkBaseModel):
    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the bot locale."""

    locale_name: Optional[str] = Field(default=UNSET, alias="localeName")
    """The name of the bot locale."""

    description: Optional[str] = UNSET
    """The description of the bot locale."""

    bot_locale_status: Optional[BotLocaleStatusOrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The current status of the bot locale. When the status is Built the locale is ready for use."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot locale was last updated."""

    last_build_submitted_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastBuildSubmittedDateTime")
    """A timestamp of the date and time that the bot locale was last built."""


class BotLocaleSummaryDict(TypedDict):
    locale_id: NotRequired[str]
    locale_name: NotRequired[str]
    description: NotRequired[str]
    bot_locale_status: NotRequired[BotLocaleStatusOrStr]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    last_build_submitted_date_time: NotRequired[RFC3339DateTime]
