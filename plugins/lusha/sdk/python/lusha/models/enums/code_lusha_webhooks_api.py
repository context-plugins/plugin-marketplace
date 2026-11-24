from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodeLushaWebhooksApi(str, Enum):
    NOT_FOUND = "NOT_FOUND"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    FORBIDDEN = "FORBIDDEN"
    UNKNOWN_ERROR = "UNKNOWN_ERROR"

    __str__ = str.__str__


CodeLushaWebhooksApiOrStr: TypeAlias = Annotated[CodeLushaWebhooksApi | str, open_enum_validator(CodeLushaWebhooksApi)]
