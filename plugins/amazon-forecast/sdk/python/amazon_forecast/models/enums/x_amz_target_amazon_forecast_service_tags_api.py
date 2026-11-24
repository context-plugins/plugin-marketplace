from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceTagsApi(str, Enum):
    AMAZON_FORECAST_LIST_TAGS_FOR_RESOURCE = "AmazonForecast.ListTagsForResource"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceTagsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceTagsApi | str, open_enum_validator(XAmzTargetAmazonForecastServiceTagsApi)
]
