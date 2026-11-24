from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonRekognitionOperationsApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_FACES = "RekognitionService.DetectFaces"

    __str__ = str.__str__


XAmzTarget3AmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonRekognitionOperationsApi | str, open_enum_validator(XAmzTarget3AmazonRekognitionOperationsApi)
]
