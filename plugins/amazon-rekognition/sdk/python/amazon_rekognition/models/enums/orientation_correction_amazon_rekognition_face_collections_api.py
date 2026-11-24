from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrientationCorrectionAmazonRekognitionFaceCollectionsApi(str, Enum):
    """If your collection is associated with a face detection model that's later than version 3.0, the value of
    OrientationCorrection is always null and no orientation information is returned. If your collection is associated
    with a face detection model that's version 3.0 or earlier, the following applies: If the input image is in .jpeg
    format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation.
    Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are
    translated to represent object locations"""

    ROTATE_0 = "ROTATE_0"
    ROTATE_90 = "ROTATE_90"
    ROTATE_180 = "ROTATE_180"
    ROTATE_270 = "ROTATE_270"

    __str__ = str.__str__


OrientationCorrectionAmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    OrientationCorrectionAmazonRekognitionFaceCollectionsApi | str,
    open_enum_validator(OrientationCorrectionAmazonRekognitionFaceCollectionsApi),
]
