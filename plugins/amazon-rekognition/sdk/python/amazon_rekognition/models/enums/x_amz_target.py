from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    REKOGNITION_SERVICE_GET_CELEBRITY_RECOGNITION = "RekognitionService.GetCelebrityRecognition"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
