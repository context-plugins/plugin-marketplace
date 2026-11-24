from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BotVersionLocaleDetails(SdkBaseModel):
    source_bot_version: str = Field(alias="sourceBotVersion")
    """The version of a bot used for a bot locale."""


class BotVersionLocaleDetailsDict(TypedDict):
    source_bot_version: str
