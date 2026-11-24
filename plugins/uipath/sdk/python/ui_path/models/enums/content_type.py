from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentType(str, Enum):
    """MIME type of the document being submitted"""

    IMAGE_JPEG = "image/jpeg"
    IMAGE_PNG = "image/png"
    APPLICATION_PDF = "application/pdf"
    IMAGE_TIFF = "image/tiff"

    __str__ = str.__str__


ContentTypeOrStr: TypeAlias = Annotated[ContentType | str, open_enum_validator(ContentType)]
