from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionFaceCollectionsApi(str, Enum):
    REKOGNITION_SERVICE_INDEX_FACES = "RekognitionService.IndexFaces"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionFaceCollectionsApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionFaceCollectionsApi),
]
