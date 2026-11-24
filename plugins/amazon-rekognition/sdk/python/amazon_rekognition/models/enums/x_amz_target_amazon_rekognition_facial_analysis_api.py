from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionFacialAnalysisApi(str, Enum):
    REKOGNITION_SERVICE_COMPARE_FACES = "RekognitionService.CompareFaces"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionFacialAnalysisApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionFacialAnalysisApi),
]
