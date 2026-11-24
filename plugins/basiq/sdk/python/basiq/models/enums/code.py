from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """Application-specific error code, expressed as a string value."""

    PARAMETER_NOT_SUPPLIED = "parameter-not-supplied"
    PARAMETER_NOT_VALID = "parameter-not-valid"
    UNSUPPORTED_ACCEPT = "unsupported-accept"
    INVALID_CONTENT = "invalid-content"
    INSTITUTION_NOT_SUPPORTED = "institution-not-supported"
    INVALID_CREDENTIALS = "invalid-credentials"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
