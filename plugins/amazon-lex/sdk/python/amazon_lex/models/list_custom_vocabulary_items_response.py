from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_vocabulary_item import CustomVocabularyItem, CustomVocabularyItemDict


class ListCustomVocabularyItemsResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with this custom vocabulary."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The identifier of the version of the bot associated with this custom vocabulary."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale where this custom vocabulary is used. The string must match one of the
    supported locales. For more information, see Supported Languages ."""

    custom_vocabulary_items: Optional[list[CustomVocabularyItem]] = Field(default=UNSET, alias="customVocabularyItems")
    """The custom vocabulary items from the list custom vocabulary response."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The nextToken identifier to the list custom vocabulary response."""


class ListCustomVocabularyItemsResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    custom_vocabulary_items: NotRequired[list[CustomVocabularyItemDict]]
    next_token: NotRequired[str]
