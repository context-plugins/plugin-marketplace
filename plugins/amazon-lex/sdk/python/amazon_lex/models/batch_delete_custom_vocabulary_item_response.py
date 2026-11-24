from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_vocabulary_item import CustomVocabularyItem, CustomVocabularyItemDict
from .failed_custom_vocabulary_item import FailedCustomVocabularyItem, FailedCustomVocabularyItemDict


class BatchDeleteCustomVocabularyItemResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with this custom vocabulary."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The identifier of the version of the bot associated with this custom vocabulary."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale where this custom vocabulary is used. The string must match one of the
    supported locales. For more information, see Supported languages
    (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)."""

    errors: Optional[list[FailedCustomVocabularyItem]] = UNSET
    """A list of custom vocabulary items that failed to delete during the operation. The reason for the error is
    contained within each error object."""

    resources: Optional[list[CustomVocabularyItem]] = UNSET
    """A list of custom vocabulary items that were successfully deleted during the operation."""


class BatchDeleteCustomVocabularyItemResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    errors: NotRequired[list[FailedCustomVocabularyItemDict]]
    resources: NotRequired[list[CustomVocabularyItemDict]]
