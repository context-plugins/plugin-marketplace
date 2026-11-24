from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionProjectVersionApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_PROJECT_VERSION = "RekognitionService.CreateProjectVersion"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionProjectVersionApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionProjectVersionApi),
]
