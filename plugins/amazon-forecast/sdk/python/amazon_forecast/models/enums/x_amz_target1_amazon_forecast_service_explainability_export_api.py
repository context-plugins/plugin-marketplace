from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceExplainabilityExportApi(str, Enum):
    AMAZON_FORECAST_DELETE_EXPLAINABILITY_EXPORT = "AmazonForecast.DeleteExplainabilityExport"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceExplainabilityExportApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceExplainabilityExportApi),
]
