from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AggregateBy1AmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    """The aggregation method chosen for a GetLabelDetection request."""

    TIMESTAMPS = "TIMESTAMPS"
    SEGMENTS = "SEGMENTS"

    __str__ = str.__str__


AggregateBy1AmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    AggregateBy1AmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(AggregateBy1AmazonRekognitionStoredVideoAnalysisApi),
]
