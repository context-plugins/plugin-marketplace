from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1(str, Enum):
    VALIDATION_ERROR = "VALIDATION_ERROR"
    DUPLICATE_SUBSCRIPTION = "DUPLICATE_SUBSCRIPTION"
    URL_VALIDATION_FAILED = "URL_VALIDATION_FAILED"
    WEBHOOK_VERIFICATION_FAILED = "WEBHOOK_VERIFICATION_FAILED"
    FORBIDDEN = "FORBIDDEN"
    UNKNOWN_ERROR = "UNKNOWN_ERROR"

    __str__ = str.__str__


Code1OrStr: TypeAlias = Annotated[Code1 | str, open_enum_validator(Code1)]
