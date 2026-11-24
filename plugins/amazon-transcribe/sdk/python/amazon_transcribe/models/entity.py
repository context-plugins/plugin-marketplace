from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Entity(SdkBaseModel):
    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time of the utterance that was identified as PII in seconds, with millisecond precision (e.g.,
    1.056)"""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)"""

    category: Optional[str] = Field(default=UNSET, alias="Category")
    """The category of information identified. The only category is PII."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of PII identified. For example, NAME or CREDIT_DEBIT_NUMBER."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or words identified as PII."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with the identified PII entity in your audio. Confidence scores are values
    between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the
    entity spoken in your media."""


class EntityDict(TypedDict):
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    category: NotRequired[str]
    type_: NotRequired[str]
    content: NotRequired[str]
    confidence: NotRequired[float]
