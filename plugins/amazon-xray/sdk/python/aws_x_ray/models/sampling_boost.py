from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class SamplingBoost(SdkBaseModel):
    boost_rate: float = Field(alias="BoostRate")
    """The calculated sampling boost rate for this service"""

    boost_rate_ttl: RFC3339DateTime = Field(alias="BoostRateTTL")
    """When the sampling boost expires."""


class SamplingBoostDict(TypedDict):
    boost_rate: float
    boost_rate_ttl: RFC3339DateTime
