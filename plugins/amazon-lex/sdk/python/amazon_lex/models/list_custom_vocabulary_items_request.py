from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCustomVocabularyItemsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the version of the bot associated with this custom vocabulary."""

    bot_version: str = Field(alias="botVersion")
    """The bot version of the bot to the list custom vocabulary request."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where this custom vocabulary is used. The string must match one of the
    supported locales. For more information, see Supported languages
    (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of items returned by the list operation."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The nextToken identifier to the list custom vocabulary request."""


class ListCustomVocabularyItemsRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
