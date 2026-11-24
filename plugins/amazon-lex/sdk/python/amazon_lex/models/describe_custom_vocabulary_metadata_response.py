from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.custom_vocabulary_status1 import CustomVocabularyStatus1OrStr


class DescribeCustomVocabularyMetadataResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the custom vocabulary."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the custom vocabulary to describe."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale that contains the custom vocabulary to describe."""

    custom_vocabulary_status: Optional[CustomVocabularyStatus1OrStr] = Field(
        default=UNSET, alias="customVocabularyStatus"
    )
    """The status of the custom vocabulary. If the status is Ready the custom vocabulary is ready to use."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the custom vocabulary was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the custom vocabulary was last updated."""


class DescribeCustomVocabularyMetadataResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    custom_vocabulary_status: NotRequired[CustomVocabularyStatus1OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
