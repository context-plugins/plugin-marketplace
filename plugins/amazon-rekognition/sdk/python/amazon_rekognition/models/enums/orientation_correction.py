from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrientationCorrection(str, Enum):
    """Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021.
    Any returned values for this field included in an API response will always be NULL. The orientation of the input
    image (counterclockwise direction). If your application displays the image, you can use this value to correct the
    orientation. The bounding box coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations
    before the image orientation is corrected. If the input image is in .jpeg format, it might contain exchangeable
    image (Exif) metadata that inclu"""

    ROTATE_0 = "ROTATE_0"
    ROTATE_90 = "ROTATE_90"
    ROTATE_180 = "ROTATE_180"
    ROTATE_270 = "ROTATE_270"

    __str__ = str.__str__


OrientationCorrectionOrStr: TypeAlias = Annotated[
    OrientationCorrection | str, open_enum_validator(OrientationCorrection)
]
