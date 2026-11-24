from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MedicalEntity(SdkBaseModel):
    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time, in seconds, of the utterance that was identified as PHI."""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time, in seconds, of the utterance that was identified as PHI."""

    category: Optional[str] = Field(default=UNSET, alias="Category")
    """The category of information identified. The only category is PHI."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or words identified as PHI."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with the identified PHI entity in your audio. Confidence scores are values
    between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the
    entity spoken in your media."""


class MedicalEntityDict(TypedDict):
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    category: NotRequired[str]
    content: NotRequired[str]
    confidence: NotRequired[float]
