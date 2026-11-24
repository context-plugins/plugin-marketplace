from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget24(str, Enum):
    REKOGNITION_SERVICE_TAG_RESOURCE = "RekognitionService.TagResource"

    __str__ = str.__str__


XAmzTarget24OrStr: TypeAlias = Annotated[XAmzTarget24 | str, open_enum_validator(XAmzTarget24)]
