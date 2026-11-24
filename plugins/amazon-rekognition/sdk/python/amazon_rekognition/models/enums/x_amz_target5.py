from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5(str, Enum):
    REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE = "RekognitionService.SearchFacesByImage"

    __str__ = str.__str__


XAmzTarget5OrStr: TypeAlias = Annotated[XAmzTarget5 | str, open_enum_validator(XAmzTarget5)]
