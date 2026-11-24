from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType2(str, Enum):
    """The dataset type (training data or test data)."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


DatasetType2OrStr: TypeAlias = Annotated[DatasetType2 | str, open_enum_validator(DatasetType2)]
