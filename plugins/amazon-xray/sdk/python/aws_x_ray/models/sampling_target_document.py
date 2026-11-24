from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .sampling_boost import SamplingBoost, SamplingBoostDict


class SamplingTargetDocument(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule."""

    fixed_rate: Optional[float] = Field(default=UNSET, alias="FixedRate")
    """The percentage of matching requests to instrument, after the reservoir is exhausted."""

    reservoir_quota: Optional[int] = Field(default=UNSET, alias="ReservoirQuota")
    """The number of requests per second that X-Ray allocated for this service."""

    reservoir_quota_ttl: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ReservoirQuotaTTL")
    """When the reservoir quota expires."""

    interval: Optional[int] = Field(default=UNSET, alias="Interval")
    """The number of seconds for the service to wait before getting sampling targets again."""

    sampling_boost: Optional[SamplingBoost] = Field(default=UNSET, alias="SamplingBoost")


class SamplingTargetDocumentDict(TypedDict):
    rule_name: NotRequired[str]
    fixed_rate: NotRequired[float]
    reservoir_quota: NotRequired[int]
    reservoir_quota_ttl: NotRequired[RFC3339DateTime]
    interval: NotRequired[int]
    sampling_boost: NotRequired[SamplingBoostDict]
