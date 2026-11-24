from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType1(str, Enum):
    """The dataset type."""

    TARGET_TIME_SERIES = "TARGET_TIME_SERIES"
    RELATED_TIME_SERIES = "RELATED_TIME_SERIES"
    ITEM_METADATA = "ITEM_METADATA"

    __str__ = str.__str__


DatasetType1OrStr: TypeAlias = Annotated[DatasetType1 | str, open_enum_validator(DatasetType1)]
