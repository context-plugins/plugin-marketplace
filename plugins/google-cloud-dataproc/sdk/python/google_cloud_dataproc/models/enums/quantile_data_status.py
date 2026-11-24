from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QuantileDataStatus(str, Enum):
    QUANTILE_DATA_STATUS_UNSPECIFIED = "QUANTILE_DATA_STATUS_UNSPECIFIED"
    QUANTILE_DATA_STATUS_COMPLETED = "QUANTILE_DATA_STATUS_COMPLETED"
    QUANTILE_DATA_STATUS_FAILED = "QUANTILE_DATA_STATUS_FAILED"

    __str__ = str.__str__


QuantileDataStatusOrStr: TypeAlias = Annotated[QuantileDataStatus | str, open_enum_validator(QuantileDataStatus)]
