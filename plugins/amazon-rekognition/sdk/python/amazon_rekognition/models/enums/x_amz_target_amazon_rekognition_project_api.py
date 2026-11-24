from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionProjectApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_PROJECT = "RekognitionService.CreateProject"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionProjectApi | str, open_enum_validator(XAmzTargetAmazonRekognitionProjectApi)
]
