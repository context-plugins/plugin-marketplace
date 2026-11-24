from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HealthMetricsConfig(str, Enum):
    """Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
    NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated
    bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration. EngineCPUUtilization: The CPU
    utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache
    configuration. Metrics will be recorded by API ID. You can set the value to ENABLED or DISABLED."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


HealthMetricsConfigOrStr: TypeAlias = Annotated[HealthMetricsConfig | str, open_enum_validator(HealthMetricsConfig)]
