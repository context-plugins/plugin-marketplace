from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CallAnalyticsEntity(SdkBaseModel):
    begin_offset_millis: Optional[int] = Field(default=UNSET, alias="BeginOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the start of the identified entity."""

    end_offset_millis: Optional[int] = Field(default=UNSET, alias="EndOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the end of the identified entity."""

    category: Optional[str] = Field(default=UNSET, alias="Category")
    """The category of information identified. For example, PII."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of PII identified. For example, NAME or CREDIT_DEBIT_NUMBER."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or words that represent the identified entity."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with the identification of an entity in your transcript. Confidence scores are
    values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches
    the entity spoken in your media."""


class CallAnalyticsEntityDict(TypedDict):
    begin_offset_millis: NotRequired[int]
    end_offset_millis: NotRequired[int]
    category: NotRequired[str]
    type_: NotRequired[str]
    content: NotRequired[str]
    confidence: NotRequired[float]
