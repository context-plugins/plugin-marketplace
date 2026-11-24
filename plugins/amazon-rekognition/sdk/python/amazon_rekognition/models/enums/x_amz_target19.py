from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    REKOGNITION_SERVICE_START_SEGMENT_DETECTION = "RekognitionService.StartSegmentDetection"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
