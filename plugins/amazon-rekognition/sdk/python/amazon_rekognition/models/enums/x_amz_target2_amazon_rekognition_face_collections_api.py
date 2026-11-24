from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionFaceCollectionsApi(str, Enum):
    REKOGNITION_SERVICE_LIST_COLLECTIONS = "RekognitionService.ListCollections"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionFaceCollectionsApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionFaceCollectionsApi),
]
