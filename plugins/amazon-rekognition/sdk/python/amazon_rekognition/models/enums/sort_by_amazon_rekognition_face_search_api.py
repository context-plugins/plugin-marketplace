from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAmazonRekognitionFaceSearchApi(str, Enum):
    """Sort to use for grouping faces in the response. Use TIMESTAMP to group faces by the time that they are
    recognized. Use INDEX to sort by recognized faces."""

    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortByAmazonRekognitionFaceSearchApiOrStr: TypeAlias = Annotated[
    SortByAmazonRekognitionFaceSearchApi | str, open_enum_validator(SortByAmazonRekognitionFaceSearchApi)
]
