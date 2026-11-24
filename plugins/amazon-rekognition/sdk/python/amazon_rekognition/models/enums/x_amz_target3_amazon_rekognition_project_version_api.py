from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonRekognitionProjectVersionApi(str, Enum):
    REKOGNITION_SERVICE_START_PROJECT_VERSION = "RekognitionService.StartProjectVersion"

    __str__ = str.__str__


XAmzTarget3AmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonRekognitionProjectVersionApi | str,
    open_enum_validator(XAmzTarget3AmazonRekognitionProjectVersionApi),
]
