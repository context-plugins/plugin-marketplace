from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_transcribe_service_operations_api import TypeAmazonTranscribeServiceOperationsApiOrStr


class MedicalItem(SdkBaseModel):
    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time, in seconds, of the transcribed item."""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time, in seconds, of the transcribed item."""

    type_: Optional[TypeAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or punctuation that was transcribed."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0
    and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in
    your media."""

    speaker: Optional[str] = Field(default=UNSET, alias="Speaker")
    """If speaker partitioning is enabled, Speaker labels the speaker of the specified item."""


class MedicalItemDict(TypedDict):
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    type_: NotRequired[TypeAmazonTranscribeServiceOperationsApiOrStr]
    content: NotRequired[str]
    confidence: NotRequired[float]
    speaker: NotRequired[str]
