from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionProjectApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_PROJECT = "RekognitionService.DeleteProject"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionProjectApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionProjectApi)
]
