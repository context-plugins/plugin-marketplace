from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetType(str, Enum):
    """The dataset type. You can specify that the data in a dataset is for training the model or for testing the
    model."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


DatasetTypeOrStr: TypeAlias = Annotated[DatasetType | str, open_enum_validator(DatasetType)]
