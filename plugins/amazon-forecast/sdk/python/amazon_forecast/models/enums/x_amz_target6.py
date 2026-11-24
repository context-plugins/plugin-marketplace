from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    AMAZON_FORECAST_LIST_WHAT_IF_ANALYSES = "AmazonForecast.ListWhatIfAnalyses"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
