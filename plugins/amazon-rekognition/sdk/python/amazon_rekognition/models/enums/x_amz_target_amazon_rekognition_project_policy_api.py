from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionProjectPolicyApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_PROJECT_POLICY = "RekognitionService.DeleteProjectPolicy"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionProjectPolicyApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionProjectPolicyApi | str, open_enum_validator(XAmzTargetAmazonRekognitionProjectPolicyApi)
]
