from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestSetDiscrepancyReportBotAliasTarget(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier for the bot alias."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The unique identifier for the bot associated with the bot alias."""

    locale_id: str = Field(alias="localeId")
    """The unique identifier of the locale associated with the bot alias."""


class TestSetDiscrepancyReportBotAliasTargetDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
