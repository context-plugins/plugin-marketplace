from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionFaceApi(str, Enum):
    REKOGNITION_SERVICE_DISASSOCIATE_FACES = "RekognitionService.DisassociateFaces"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionFaceApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionFaceApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionFaceApi)
]
