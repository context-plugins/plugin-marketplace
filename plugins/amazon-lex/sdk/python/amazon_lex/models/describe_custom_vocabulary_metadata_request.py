from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeCustomVocabularyMetadataRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the custom vocabulary."""

    bot_version: str = Field(alias="botVersion")
    """The bot version of the bot to return metadata for."""

    locale_id: str = Field(alias="localeId")
    """The locale to return the custom vocabulary information for. The locale must be en_GB."""


class DescribeCustomVocabularyMetadataRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
