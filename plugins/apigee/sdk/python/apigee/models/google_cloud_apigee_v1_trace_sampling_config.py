from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sampler import SamplerOrStr


class GoogleCloudApigeeV1TraceSamplingConfig(SdkBaseModel):
    """TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in
    the distributed trace configuration can be overridden using the distribute trace configuration override APIs."""

    sampling_rate: Optional[float] = Field(default=UNSET, alias="samplingRate")
    """Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are >
    0 and <= 0.5."""

    sampler: Optional[SamplerOrStr] = UNSET
    """Sampler of distributed tracing. OFF is the default value."""


class GoogleCloudApigeeV1TraceSamplingConfigDict(TypedDict):
    sampling_rate: NotRequired[float]
    sampler: NotRequired[SamplerOrStr]
