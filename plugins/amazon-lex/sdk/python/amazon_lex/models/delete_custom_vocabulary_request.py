from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCustomVocabularyRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot to remove the custom vocabulary from."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to remove the custom vocabulary from."""

    locale_id: str = Field(alias="localeId")
    """The locale identifier for the locale that contains the custom vocabulary to remove."""


class DeleteCustomVocabularyRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
