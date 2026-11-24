from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotVersionRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot containing the version to return metadata for."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to return metadata for."""


class DescribeBotVersionRequestDict(TypedDict):
    bot_id: str
    bot_version: str
