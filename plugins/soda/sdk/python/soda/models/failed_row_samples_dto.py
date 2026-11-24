from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FailedRowSamplesDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    sample_size: Optional[int] = Field(default=UNSET, alias="sampleSize")


class FailedRowSamplesDtoDict(TypedDict):
    enabled: NotRequired[bool]
    sample_size: NotRequired[int]
