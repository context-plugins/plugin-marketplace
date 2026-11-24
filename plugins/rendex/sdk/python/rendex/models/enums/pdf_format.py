from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PdfFormat(str, Enum):
    """Paper size for PDF output (only applies when ``format`` is ``pdf``)"""

    A4 = "A4"
    LETTER = "Letter"
    LEGAL = "Legal"
    TABLOID = "Tabloid"
    A3 = "A3"

    __str__ = str.__str__


PdfFormatOrStr: TypeAlias = Annotated[PdfFormat | str, open_enum_validator(PdfFormat)]
