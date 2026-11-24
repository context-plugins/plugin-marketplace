from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BotAliasTestExecutionTarget(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The bot Id of the bot alias used in the test set execution."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The bot alias Id of the bot alias used in the test set execution."""

    locale_id: str = Field(alias="localeId")
    """The locale Id of the bot alias used in the test set execution."""


class BotAliasTestExecutionTargetDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
