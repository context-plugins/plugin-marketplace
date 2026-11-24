from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LoaContentType(str, Enum):
    """The standard media type for the LOA-CFA document. The only supported value is application/pdf."""

    APPLICATION_PDF = "application/pdf"

    __str__ = str.__str__


LoaContentTypeOrStr: TypeAlias = Annotated[LoaContentType | str, open_enum_validator(LoaContentType)]
