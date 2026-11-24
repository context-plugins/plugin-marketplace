from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_rate_boost import SamplingRateBoost, SamplingRateBoostDict


class SamplingRule(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule. Specify a rule by either name or ARN, but not both."""

    rule_arn: Optional[str] = Field(default=UNSET, alias="RuleARN")
    """The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."""

    resource_arn: str = Field(alias="ResourceARN")
    """Matches the ARN of the Amazon Web Services resource on which the service runs."""

    priority: int = Field(alias="Priority")
    """The priority of the sampling rule."""

    fixed_rate: float = Field(alias="FixedRate")
    """The percentage of matching requests to instrument, after the reservoir is exhausted."""

    reservoir_size: int = Field(alias="ReservoirSize")
    """A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is
    not used directly by services, but applies to all services using the rule collectively."""

    service_name: str = Field(alias="ServiceName")
    """Matches the name that the service uses to identify itself in segments."""

    service_type: str = Field(alias="ServiceType")
    """Matches the origin that the service uses to identify its type in segments."""

    host: str = Field(alias="Host")
    """Matches the hostname from a request URL."""

    http_method: str = Field(alias="HTTPMethod")
    """Matches the HTTP method of a request."""

    url_path: str = Field(alias="URLPath")
    """Matches the path from a request URL."""

    version: int = Field(alias="Version")
    """The version of the sampling rule format (1)."""

    attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="Attributes")
    """Matches attributes derived from the request."""

    sampling_rate_boost: Optional[SamplingRateBoost] = Field(default=UNSET, alias="SamplingRateBoost")


class SamplingRuleDict(TypedDict):
    rule_name: NotRequired[str]
    rule_arn: NotRequired[str]
    resource_arn: str
    priority: int
    fixed_rate: float
    reservoir_size: int
    service_name: str
    service_type: str
    host: str
    http_method: str
    url_path: str
    version: int
    attributes: NotRequired[dict[str, str]]
    sampling_rate_boost: NotRequired[SamplingRateBoostDict]
