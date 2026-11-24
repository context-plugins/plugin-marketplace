from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sampler import SamplerOrStr


class GoogleCloudApigeeV1TraceSamplingConfig3(SdkBaseModel):
    """Distributed trace configuration for all API proxies in an environment. You can also override the configuration
    for a specific API proxy using the distributed trace configuration overrides API."""

    sampling_rate: Optional[float] = Field(default=UNSET, alias="samplingRate")
    """Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are >
    0 and <= 0.5."""

    sampler: Optional[SamplerOrStr] = UNSET
    """Sampler of distributed tracing. OFF is the default value."""


class GoogleCloudApigeeV1TraceSamplingConfig3Dict(TypedDict):
    sampling_rate: NotRequired[float]
    sampler: NotRequired[SamplerOrStr]
