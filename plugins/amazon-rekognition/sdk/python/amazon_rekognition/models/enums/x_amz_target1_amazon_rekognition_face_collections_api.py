from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionFaceCollectionsApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_COLLECTION = "RekognitionService.CreateCollection"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionFaceCollectionsApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionFaceCollectionsApi),
]
