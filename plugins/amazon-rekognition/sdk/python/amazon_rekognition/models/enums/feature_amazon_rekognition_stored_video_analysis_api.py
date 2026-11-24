from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeatureAmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    GENERAL_LABELS = "GENERAL_LABELS"

    __str__ = str.__str__


FeatureAmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    FeatureAmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(FeatureAmazonRekognitionStoredVideoAnalysisApi),
]
