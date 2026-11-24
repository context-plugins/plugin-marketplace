from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7(str, Enum):
    REKOGNITION_SERVICE_DETECT_TEXT = "RekognitionService.DetectText"

    __str__ = str.__str__


XAmzTarget7OrStr: TypeAlias = Annotated[XAmzTarget7 | str, open_enum_validator(XAmzTarget7)]
