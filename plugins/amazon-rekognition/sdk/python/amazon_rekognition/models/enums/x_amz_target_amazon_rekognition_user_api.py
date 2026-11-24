from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionUserApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_USER = "RekognitionService.CreateUser"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionUserApi | str, open_enum_validator(XAmzTargetAmazonRekognitionUserApi)
]
