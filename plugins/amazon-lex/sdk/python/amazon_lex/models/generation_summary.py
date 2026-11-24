from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.generation_status import GenerationStatusOrStr


class GenerationSummary(SdkBaseModel):
    generation_id: Optional[str] = Field(default=UNSET, alias="generationId")
    """The unique identifier of the generation request."""

    generation_status: Optional[GenerationStatusOrStr] = Field(default=UNSET, alias="generationStatus")
    """The status of the generation request."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time at which the generation request was made."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time at which the generation request was last updated."""


class GenerationSummaryDict(TypedDict):
    generation_id: NotRequired[str]
    generation_status: NotRequired[GenerationStatusOrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
