from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.api_caching_behavior import ApiCachingBehaviorOrStr
from .enums.health_metrics_config import HealthMetricsConfigOrStr
from .enums.type import TypeOrStr


class V1ApisApiCachesRequest(SdkBaseModel):
    ttl: int
    """TTL in seconds for cache entries. Valid values are 1–3,600 seconds."""

    transit_encryption_enabled: Optional[bool] = Field(default=UNSET, alias="transitEncryptionEnabled")
    """Transit encryption flag when connecting to cache. You cannot update this setting after creation."""

    at_rest_encryption_enabled: Optional[bool] = Field(default=UNSET, alias="atRestEncryptionEnabled")
    """At-rest encryption flag for cache. You cannot update this setting after creation."""

    api_caching_behavior: ApiCachingBehaviorOrStr = Field(alias="apiCachingBehavior")
    """Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual resolvers are
    automatically cached. All API calls will try to return responses from the cache. PER_RESOLVER_CACHING: Individual
    resolvers that you specify are cached. OPERATION_LEVEL_CACHING: Full requests are cached together and returned
    without executing resolvers."""

    type_: TypeOrStr = Field(alias="type")
    """The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X (not available in
    all regions) LARGE_12X Historically, instance types were identified by an EC2-style value. As of July 2020, this is
    deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but
    their use is discouraged: T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A
    r4.large instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A
    r4.4xlarge instance type."""

    health_metrics_config: Optional[HealthMetricsConfigOrStr] = Field(default=UNSET, alias="healthMetricsConfig")
    """Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
    NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated
    bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration. EngineCPUUtilization: The CPU
    utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache
    configuration. Metrics will be recorded by API ID. You can set the value to ENABLED or DISABLED."""


class V1ApisApiCachesRequestDict(TypedDict):
    ttl: int
    transit_encryption_enabled: NotRequired[bool]
    at_rest_encryption_enabled: NotRequired[bool]
    api_caching_behavior: ApiCachingBehaviorOrStr
    type_: TypeOrStr
    health_metrics_config: NotRequired[HealthMetricsConfigOrStr]
