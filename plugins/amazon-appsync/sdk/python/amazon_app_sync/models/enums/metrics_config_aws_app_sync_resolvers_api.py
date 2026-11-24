from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricsConfigAwsAppSyncResolversApi(str, Enum):
    """Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig won't be used
    unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If the resolverLevelMetricsBehavior is
    set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig will be ignored. However, you can still set its value.
    metricsConfig can be ENABLED or DISABLED."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


MetricsConfigAwsAppSyncResolversApiOrStr: TypeAlias = Annotated[
    MetricsConfigAwsAppSyncResolversApi | str, open_enum_validator(MetricsConfigAwsAppSyncResolversApi)
]
