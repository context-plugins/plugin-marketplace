from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_version_locale_details import BotVersionLocaleDetails, BotVersionLocaleDetailsDict


class CreateBotVersionRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to create the version for."""

    description: Optional[str] = UNSET
    """A description of the version. Use the description to help identify the version in lists."""

    bot_version_locale_specification: dict[str, BotVersionLocaleDetails] = Field(alias="botVersionLocaleSpecification")
    """Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other
    previously published version for each locale. When you specify a source version, the locale data is copied from the
    source version to the new version."""


class CreateBotVersionRequestDict(TypedDict):
    bot_id: str
    description: NotRequired[str]
    bot_version_locale_specification: dict[str, BotVersionLocaleDetailsDict]
