from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_vocabulary_entry_id import CustomVocabularyEntryId, CustomVocabularyEntryIdDict


class BatchDeleteCustomVocabularyItemRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with this custom vocabulary."""

    bot_version: str = Field(alias="botVersion")
    """The identifier of the version of the bot associated with this custom vocabulary."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where this custom vocabulary is used. The string must match one of the
    supported locales. For more information, see Supported Languages ."""

    custom_vocabulary_item_list: list[CustomVocabularyEntryId] = Field(alias="customVocabularyItemList")
    """A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary
    entry identifier."""


class BatchDeleteCustomVocabularyItemRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    custom_vocabulary_item_list: list[CustomVocabularyEntryIdDict]
