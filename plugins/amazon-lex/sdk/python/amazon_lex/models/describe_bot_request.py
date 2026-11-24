from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot to describe."""


class DescribeBotRequestDict(TypedDict):
    bot_id: str
