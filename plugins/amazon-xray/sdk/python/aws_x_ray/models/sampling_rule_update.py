from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_rate_boost import SamplingRateBoost, SamplingRateBoostDict


class SamplingRuleUpdate(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule. Specify a rule by either name or ARN, but not both."""

    rule_arn: Optional[str] = Field(default=UNSET, alias="RuleARN")
    """The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."""

    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceARN")
    """Matches the ARN of the Amazon Web Services resource on which the service runs."""

    priority: Optional[int] = Field(default=UNSET, alias="Priority")
    """The priority of the sampling rule."""

    fixed_rate: Optional[float] = Field(default=UNSET, alias="FixedRate")
    """The percentage of matching requests to instrument, after the reservoir is exhausted."""

    reservoir_size: Optional[int] = Field(default=UNSET, alias="ReservoirSize")
    """A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is
    not used directly by services, but applies to all services using the rule collectively."""

    host: Optional[str] = Field(default=UNSET, alias="Host")
    """Matches the hostname from a request URL."""

    service_name: Optional[str] = Field(default=UNSET, alias="ServiceName")
    """Matches the name that the service uses to identify itself in segments."""

    service_type: Optional[str] = Field(default=UNSET, alias="ServiceType")
    """Matches the origin that the service uses to identify its type in segments."""

    http_method: Optional[str] = Field(default=UNSET, alias="HTTPMethod")
    """Matches the HTTP method of a request."""

    url_path: Optional[str] = Field(default=UNSET, alias="URLPath")
    """Matches the path from a request URL."""

    attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="Attributes")
    """Matches attributes derived from the request."""

    sampling_rate_boost: Optional[SamplingRateBoost] = Field(default=UNSET, alias="SamplingRateBoost")


class SamplingRuleUpdateDict(TypedDict):
    rule_name: NotRequired[str]
    rule_arn: NotRequired[str]
    resource_arn: NotRequired[str]
    priority: NotRequired[int]
    fixed_rate: NotRequired[float]
    reservoir_size: NotRequired[int]
    host: NotRequired[str]
    service_name: NotRequired[str]
    service_type: NotRequired[str]
    http_method: NotRequired[str]
    url_path: NotRequired[str]
    attributes: NotRequired[dict[str, str]]
    sampling_rate_boost: NotRequired[SamplingRateBoostDict]
