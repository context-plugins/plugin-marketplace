from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceExplainabilityExportApi(str, Enum):
    AMAZON_FORECAST_CREATE_EXPLAINABILITY_EXPORT = "AmazonForecast.CreateExplainabilityExport"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceExplainabilityExportApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceExplainabilityExportApi),
]
