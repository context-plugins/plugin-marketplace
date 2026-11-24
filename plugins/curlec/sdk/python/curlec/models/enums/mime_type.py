from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MimeType(str, Enum):
    """MIME type of the uploaded file."""

    IMAGE_JPG = "image/jpg"
    IMAGE_JPEG = "image/jpeg"
    IMAGE_PNG = "image/png"
    APPLICATION_PDF = "application/pdf"

    __str__ = str.__str__


MimeTypeOrStr: TypeAlias = Annotated[MimeType | str, open_enum_validator(MimeType)]
