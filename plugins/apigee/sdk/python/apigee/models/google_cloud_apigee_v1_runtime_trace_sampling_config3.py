from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sampler import SamplerOrStr


class GoogleCloudApigeeV1RuntimeTraceSamplingConfig3(SdkBaseModel):
    """Trace configuration for all API proxies in an environment."""

    sampling_rate: Optional[float] = Field(default=UNSET, alias="samplingRate")
    """Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are >
    0 and <= 0.5."""

    sampler: Optional[SamplerOrStr] = UNSET
    """Sampler of distributed tracing. OFF is the default value."""


class GoogleCloudApigeeV1RuntimeTraceSamplingConfig3Dict(TypedDict):
    sampling_rate: NotRequired[float]
    sampler: NotRequired[SamplerOrStr]
