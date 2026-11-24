from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType1(str, Enum):
    """Filter the datasets based on the dataset type."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


DatasetType1OrStr: TypeAlias = Annotated[DatasetType1 | str, open_enum_validator(DatasetType1)]
