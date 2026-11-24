from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionProjectVersionApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_PROJECT_VERSION = "RekognitionService.DeleteProjectVersion"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionProjectVersionApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionProjectVersionApi),
]
