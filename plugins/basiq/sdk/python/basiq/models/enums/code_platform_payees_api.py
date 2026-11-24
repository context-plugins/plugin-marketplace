from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodePlatformPayeesApi(str, Enum):
    """Application-specific error code."""

    PARAMETER_NOT_SUPPLIED = "parameter-not-supplied"
    PARAMETER_NOT_VALID = "parameter-not-valid"
    UNSUPPORTED_ACCEPT = "unsupported-accept"
    INVALID_CONTENT = "invalid-content"
    INSTITUTION_NOT_SUPPORTED = "institution-not-supported"
    INVALID_CREDENTIALS = "invalid-credentials"

    __str__ = str.__str__


CodePlatformPayeesApiOrStr: TypeAlias = Annotated[
    CodePlatformPayeesApi | str, open_enum_validator(CodePlatformPayeesApi)
]
