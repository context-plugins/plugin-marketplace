from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeSeriesGranularity(str, Enum):
    """To create an Explainability for all time series in your datasets, use ALL. To create an Explainability for
    specific time series in your datasets, use SPECIFIC. Specify time series by uploading a CSV or Parquet file to an
    Amazon S3 bucket and set the location within the DataDestination data type."""

    ALL = "ALL"
    SPECIFIC = "SPECIFIC"

    __str__ = str.__str__


TimeSeriesGranularityOrStr: TypeAlias = Annotated[
    TimeSeriesGranularity | str, open_enum_validator(TimeSeriesGranularity)
]
