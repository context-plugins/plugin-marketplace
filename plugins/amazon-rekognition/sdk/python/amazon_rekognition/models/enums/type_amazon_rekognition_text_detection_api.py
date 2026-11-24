from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonRekognitionTextDetectionApi(str, Enum):
    """The type of text that was detected."""

    LINE = "LINE"
    WORD = "WORD"

    __str__ = str.__str__


TypeAmazonRekognitionTextDetectionApiOrStr: TypeAlias = Annotated[
    TypeAmazonRekognitionTextDetectionApi | str, open_enum_validator(TypeAmazonRekognitionTextDetectionApi)
]
