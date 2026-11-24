from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy1AmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    """The sorting method chosen for a GetLabelDetection request."""

    NAME = "NAME"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortBy1AmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    SortBy1AmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(SortBy1AmazonRekognitionStoredVideoAnalysisApi),
]
