from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricsConfig(str, Enum):
    """Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be
    used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the
    dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored.
    However, you can still set its value. metricsConfig can be ENABLED or DISABLED."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


MetricsConfigOrStr: TypeAlias = Annotated[MetricsConfig | str, open_enum_validator(MetricsConfig)]
