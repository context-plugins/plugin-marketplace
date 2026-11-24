from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBundleSocialUploadApi(str, Enum):
    IMAGE = "image"
    VIDEO = "video"
    DOCUMENT = "document"

    __str__ = str.__str__


TypeBundleSocialUploadApiOrStr: TypeAlias = Annotated[
    TypeBundleSocialUploadApi | str, open_enum_validator(TypeBundleSocialUploadApi)
]
