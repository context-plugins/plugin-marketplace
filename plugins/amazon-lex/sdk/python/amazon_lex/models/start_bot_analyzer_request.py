from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartBotAnalyzerRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot to analyze."""

    analysis_scope: Literal["BotLocale"] = Field(default="BotLocale", alias="analysisScope")
    """The scope of analysis to perform. Currently only BotLocale scope is supported. Valid Values: BotLocale"""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier for the bot locale to analyze. Required when analysisScope is BotLocale."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot to analyze. Defaults to DRAFT if not specified."""


class StartBotAnalyzerRequestDict(TypedDict):
    bot_id: str
    analysis_scope: Literal["BotLocale"]
    locale_id: NotRequired[str]
    bot_version: NotRequired[str]
