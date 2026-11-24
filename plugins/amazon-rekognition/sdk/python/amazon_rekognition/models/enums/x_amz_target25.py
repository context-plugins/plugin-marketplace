from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget25(str, Enum):
    REKOGNITION_SERVICE_UNTAG_RESOURCE = "RekognitionService.UntagResource"

    __str__ = str.__str__


XAmzTarget25OrStr: TypeAlias = Annotated[XAmzTarget25 | str, open_enum_validator(XAmzTarget25)]
