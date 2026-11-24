from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceImageOrientationCorrection(str, Enum):
    """The value of SourceImageOrientationCorrection is always null. If the input image is in .jpeg format, it might
    contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition
    uses this orientation information to perform image correction. The bounding box coordinates are translated to
    represent object locations after the orientation information in the Exif metadata is used to correct the image
    orientation. Images in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction
    for images in .png format and .jpeg imag"""

    ROTATE_0 = "ROTATE_0"
    ROTATE_90 = "ROTATE_90"
    ROTATE_180 = "ROTATE_180"
    ROTATE_270 = "ROTATE_270"

    __str__ = str.__str__


SourceImageOrientationCorrectionOrStr: TypeAlias = Annotated[
    SourceImageOrientationCorrection | str, open_enum_validator(SourceImageOrientationCorrection)
]
