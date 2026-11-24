from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSourceLevelMetricsBehavior(str, Enum):
    """Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number
    of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The
    number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data
    source or for all data sources in the request. Metrics will be recorded by API ID and data source name.
    dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and
    emits metric data for all data sourc"""

    FULL_REQUEST_DATA_SOURCE_METRICS = "FULL_REQUEST_DATA_SOURCE_METRICS"
    PER_DATA_SOURCE_METRICS = "PER_DATA_SOURCE_METRICS"

    __str__ = str.__str__


DataSourceLevelMetricsBehaviorOrStr: TypeAlias = Annotated[
    DataSourceLevelMetricsBehavior | str, open_enum_validator(DataSourceLevelMetricsBehavior)
]
