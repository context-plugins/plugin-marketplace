from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RestrictedMetricType(str, Enum):
    RESTRICTED_METRIC_TYPE_UNSPECIFIED = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    COST_DATA = "COST_DATA"
    REVENUE_DATA = "REVENUE_DATA"

    __str__ = str.__str__


RestrictedMetricTypeOrStr: TypeAlias = Annotated[RestrictedMetricType | str, open_enum_validator(RestrictedMetricType)]
