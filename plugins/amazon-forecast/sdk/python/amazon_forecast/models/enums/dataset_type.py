from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType(str, Enum):
    """The dataset type. Valid values depend on the chosen Domain."""

    TARGET_TIME_SERIES = "TARGET_TIME_SERIES"
    RELATED_TIME_SERIES = "RELATED_TIME_SERIES"
    ITEM_METADATA = "ITEM_METADATA"

    __str__ = str.__str__


DatasetTypeOrStr: TypeAlias = Annotated[DatasetType | str, open_enum_validator(DatasetType)]
