from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodeAmazonRekognitionMediaAnalysisJobApi(str, Enum):
    """Error code for the failed job."""

    INTERNAL_ERROR = "INTERNAL_ERROR"
    INVALID_S3_OBJECT = "INVALID_S3_OBJECT"
    INVALID_MANIFEST = "INVALID_MANIFEST"
    INVALID_OUTPUT_CONFIG = "INVALID_OUTPUT_CONFIG"
    INVALID_KMS_KEY = "INVALID_KMS_KEY"
    ACCESS_DENIED = "ACCESS_DENIED"
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
    RESOURCE_NOT_READY = "RESOURCE_NOT_READY"
    THROTTLED = "THROTTLED"

    __str__ = str.__str__


CodeAmazonRekognitionMediaAnalysisJobApiOrStr: TypeAlias = Annotated[
    CodeAmazonRekognitionMediaAnalysisJobApi | str, open_enum_validator(CodeAmazonRekognitionMediaAnalysisJobApi)
]
