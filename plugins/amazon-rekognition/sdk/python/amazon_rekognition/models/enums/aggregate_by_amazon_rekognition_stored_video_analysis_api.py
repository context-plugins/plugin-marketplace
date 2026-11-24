from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AggregateByAmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    """Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments."""

    TIMESTAMPS = "TIMESTAMPS"
    SEGMENTS = "SEGMENTS"

    __str__ = str.__str__


AggregateByAmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    AggregateByAmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(AggregateByAmazonRekognitionStoredVideoAnalysisApi),
]
