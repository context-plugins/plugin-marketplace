from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """Document type."""

    NATIVE_PDF = "NATIVE_PDF"
    SCANNED_PDF = "SCANNED_PDF"
    MS_WORD = "MS_WORD"
    IMAGE = "IMAGE"
    PLAIN_TEXT = "PLAIN_TEXT"
    TEXTRACT_DETECT_DOCUMENT_TEXT_JSON = "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON"
    TEXTRACT_ANALYZE_DOCUMENT_JSON = "TEXTRACT_ANALYZE_DOCUMENT_JSON"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
