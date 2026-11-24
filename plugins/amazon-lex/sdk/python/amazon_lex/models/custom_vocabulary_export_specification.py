from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomVocabularyExportSpecification(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the custom vocabulary to export."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the custom vocabulary to export."""

    locale_id: str = Field(alias="localeId")
    """The locale of the bot that contains the custom vocabulary to export."""


class CustomVocabularyExportSpecificationDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
