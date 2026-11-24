from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataState(str, Enum):
    """The data state to be fetched, can be full or all, the latter including full and partial data."""

    DATA_STATE_UNSPECIFIED = "DATA_STATE_UNSPECIFIED"
    FINAL = "FINAL"
    ALL = "ALL"
    HOURLY_ALL = "HOURLY_ALL"

    __str__ = str.__str__


DataStateOrStr: TypeAlias = Annotated[DataState | str, open_enum_validator(DataState)]
