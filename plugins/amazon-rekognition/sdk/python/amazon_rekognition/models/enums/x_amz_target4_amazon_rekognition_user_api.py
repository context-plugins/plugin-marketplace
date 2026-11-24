from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonRekognitionUserApi(str, Enum):
    REKOGNITION_SERVICE_SEARCH_USERS_BY_IMAGE = "RekognitionService.SearchUsersByImage"

    __str__ = str.__str__


XAmzTarget4AmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonRekognitionUserApi | str, open_enum_validator(XAmzTarget4AmazonRekognitionUserApi)
]
