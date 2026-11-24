from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotAliasRequest(SdkBaseModel):
    bot_alias_id: str = Field(alias="botAliasId")
    """The identifier of the bot alias to describe."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the bot alias to describe."""


class DescribeBotAliasRequestDict(TypedDict):
    bot_alias_id: str
    bot_id: str
