from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionProjectPolicyApi(str, Enum):
    REKOGNITION_SERVICE_PUT_PROJECT_POLICY = "RekognitionService.PutProjectPolicy"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionProjectPolicyApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionProjectPolicyApi),
]
