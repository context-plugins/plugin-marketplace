from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionProjectPolicyApi(str, Enum):
    REKOGNITION_SERVICE_LIST_PROJECT_POLICIES = "RekognitionService.ListProjectPolicies"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionProjectPolicyApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionProjectPolicyApi),
]
