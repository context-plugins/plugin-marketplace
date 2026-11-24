from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonRekognitionUserApi(str, Enum):
    REKOGNITION_SERVICE_SEARCH_USERS = "RekognitionService.SearchUsers"

    __str__ = str.__str__


XAmzTarget3AmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonRekognitionUserApi | str, open_enum_validator(XAmzTarget3AmazonRekognitionUserApi)
]
