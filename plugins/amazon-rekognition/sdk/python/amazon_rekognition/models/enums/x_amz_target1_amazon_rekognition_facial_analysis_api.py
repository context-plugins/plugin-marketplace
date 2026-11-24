from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionFacialAnalysisApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_FACES = "RekognitionService.DetectFaces"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionFacialAnalysisApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionFacialAnalysisApi),
]
