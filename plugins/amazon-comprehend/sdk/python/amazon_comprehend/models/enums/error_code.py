from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ErrorCode(str, Enum):
    """Error code for the cause of the error."""

    TEXTRACT_BAD_PAGE = "TEXTRACT_BAD_PAGE"
    TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED = "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED"
    PAGE_CHARACTERS_EXCEEDED = "PAGE_CHARACTERS_EXCEEDED"
    PAGE_SIZE_EXCEEDED = "PAGE_SIZE_EXCEEDED"
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"

    __str__ = str.__str__


ErrorCodeOrStr: TypeAlias = Annotated[ErrorCode | str, open_enum_validator(ErrorCode)]
