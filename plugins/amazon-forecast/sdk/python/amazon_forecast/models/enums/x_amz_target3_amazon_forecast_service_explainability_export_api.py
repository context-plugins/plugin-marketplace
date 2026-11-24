from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceExplainabilityExportApi(str, Enum):
    AMAZON_FORECAST_LIST_EXPLAINABILITY_EXPORTS = "AmazonForecast.ListExplainabilityExports"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceExplainabilityExportApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceExplainabilityExportApi),
]
