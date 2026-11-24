from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAmazonRekognitionOperationsApi(str, Enum):
    """Sort to use for elements in the Persons array. Use TIMESTAMP to sort array elements by the time persons are
    detected. Use INDEX to sort by the tracked persons. If you sort by INDEX, the array elements for each person are
    sorted by detection confidence. The default sort is by TIMESTAMP."""

    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortByAmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    SortByAmazonRekognitionOperationsApi | str, open_enum_validator(SortByAmazonRekognitionOperationsApi)
]
