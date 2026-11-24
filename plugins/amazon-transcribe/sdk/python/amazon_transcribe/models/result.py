from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alternative import Alternative, AlternativeDict
from .enums.language_code4_amazon_transcribe_service_operations_api import (
    LanguageCode4AmazonTranscribeServiceOperationsApiOrStr,
)
from .language_with_score import LanguageWithScore, LanguageWithScoreDict


class Result(SdkBaseModel):
    result_id: Optional[str] = Field(default=UNSET, alias="ResultId")
    """Provides a unique identifier for the Result."""

    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time of the Result in seconds, with millisecond precision (e.g., 1.056)."""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time of the Result in seconds, with millisecond precision (e.g., 1.056)."""

    is_partial: Optional[bool] = Field(default=UNSET, alias="IsPartial")
    """Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If IsPartial is false,
    the segment is complete."""

    alternatives: Optional[list[Alternative]] = Field(default=UNSET, alias="Alternatives")
    """A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of
    Items, Entities, or Transcript."""

    channel_id: Optional[str] = Field(default=UNSET, alias="ChannelId")
    """Indicates which audio channel is associated with the Result."""

    language_code: Optional[LanguageCode4AmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code that represents the language spoken in your audio stream."""

    language_identification: Optional[list[LanguageWithScore]] = Field(default=UNSET, alias="LanguageIdentification")
    """The language code of the dominant language identified in your stream. If you enabled channel identification and
    each channel of your audio contains a different language, you may have more than one result."""


class ResultDict(TypedDict):
    result_id: NotRequired[str]
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    is_partial: NotRequired[bool]
    alternatives: NotRequired[list[AlternativeDict]]
    channel_id: NotRequired[str]
    language_code: NotRequired[LanguageCode4AmazonTranscribeServiceOperationsApiOrStr]
    language_identification: NotRequired[list[LanguageWithScoreDict]]
