from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sample_value import SampleValue, SampleValueDict


class SlotTypeValue(SdkBaseModel):
    sample_value: Optional[SampleValue] = Field(default=UNSET, alias="sampleValue")
    synonyms: Optional[list[SampleValue]] = UNSET
    """Additional values related to the slot type entry."""


class SlotTypeValueDict(TypedDict):
    sample_value: NotRequired[SampleValueDict]
    synonyms: NotRequired[list[SampleValueDict]]
