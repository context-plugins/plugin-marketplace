from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget17(str, Enum):
    REKOGNITION_SERVICE_START_PERSON_TRACKING = "RekognitionService.StartPersonTracking"

    __str__ = str.__str__


XAmzTarget17OrStr: TypeAlias = Annotated[XAmzTarget17 | str, open_enum_validator(XAmzTarget17)]
