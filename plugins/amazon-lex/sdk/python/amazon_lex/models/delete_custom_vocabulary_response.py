from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.custom_vocabulary_status import CustomVocabularyStatusOrStr


class DeleteCustomVocabularyResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that the custom vocabulary was removed from."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that the custom vocabulary was removed from."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale identifier for the locale that the custom vocabulary was removed from."""

    custom_vocabulary_status: Optional[CustomVocabularyStatusOrStr] = Field(
        default=UNSET, alias="customVocabularyStatus"
    )
    """The status of removing the custom vocabulary."""


class DeleteCustomVocabularyResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    custom_vocabulary_status: NotRequired[CustomVocabularyStatusOrStr]
