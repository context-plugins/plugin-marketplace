from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionUserApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_USER = "RekognitionService.DeleteUser"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionUserApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionUserApi)
]
