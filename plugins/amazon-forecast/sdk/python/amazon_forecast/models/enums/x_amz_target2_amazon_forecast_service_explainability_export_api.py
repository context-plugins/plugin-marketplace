from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceExplainabilityExportApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY_EXPORT = "AmazonForecast.DescribeExplainabilityExport"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceExplainabilityExportApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceExplainabilityExportApi),
]
