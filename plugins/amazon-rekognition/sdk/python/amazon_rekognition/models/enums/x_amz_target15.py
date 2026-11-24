from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    REKOGNITION_SERVICE_START_FACE_DETECTION = "RekognitionService.StartFaceDetection"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
