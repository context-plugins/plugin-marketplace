from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricSource(str, Enum):
    """Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see
    Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more
    information)."""

    METRIC_SOURCE_UNSPECIFIED = "METRIC_SOURCE_UNSPECIFIED"
    MONITORING_AGENT_DEFAULTS = "MONITORING_AGENT_DEFAULTS"
    HDFS = "HDFS"
    SPARK = "SPARK"
    YARN = "YARN"
    SPARK_HISTORY_SERVER = "SPARK_HISTORY_SERVER"
    HIVESERVER2 = "HIVESERVER2"
    HIVEMETASTORE = "HIVEMETASTORE"
    FLINK = "FLINK"

    __str__ = str.__str__


MetricSourceOrStr: TypeAlias = Annotated[MetricSource | str, open_enum_validator(MetricSource)]
