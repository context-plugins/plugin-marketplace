from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBundleSocialPostImportApi(str, Enum):
    POST = "POST"
    REEL = "REEL"
    STORY = "STORY"
    VIDEO = "VIDEO"
    IMAGE = "IMAGE"

    __str__ = str.__str__


TypeBundleSocialPostImportApiOrStr: TypeAlias = Annotated[
    TypeBundleSocialPostImportApi | str, open_enum_validator(TypeBundleSocialPostImportApi)
]
