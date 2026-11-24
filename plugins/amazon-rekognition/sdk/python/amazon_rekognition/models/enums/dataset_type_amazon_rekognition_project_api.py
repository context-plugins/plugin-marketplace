from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetTypeAmazonRekognitionProjectApi(str, Enum):
    """The type of the dataset."""

    TRAIN = "TRAIN"
    TEST = "TEST"

    __str__ = str.__str__


DatasetTypeAmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    DatasetTypeAmazonRekognitionProjectApi | str, open_enum_validator(DatasetTypeAmazonRekognitionProjectApi)
]
