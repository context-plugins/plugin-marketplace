from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomVocabularyImportSpecification(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to import the custom vocabulary to."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to import the custom vocabulary to."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the local to import the custom vocabulary to. The value must be en_GB."""


class CustomVocabularyImportSpecificationDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
