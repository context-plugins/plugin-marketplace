from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionFaceApi(str, Enum):
    REKOGNITION_SERVICE_ASSOCIATE_FACES = "RekognitionService.AssociateFaces"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionFaceApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionFaceApi | str, open_enum_validator(XAmzTargetAmazonRekognitionFaceApi)
]
