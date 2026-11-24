from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionUserApi(str, Enum):
    REKOGNITION_SERVICE_LIST_USERS = "RekognitionService.ListUsers"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionUserApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionUserApi)
]
