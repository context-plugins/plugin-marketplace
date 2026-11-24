from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType(str, Enum):
    """The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a test dataset."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


DatasetTypeOrStr: TypeAlias = Annotated[DatasetType | str, open_enum_validator(DatasetType)]
