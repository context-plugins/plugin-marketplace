from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCodeqrIoFoldersApi(str, Enum):
    DEFAULT = "default"
    TEMPLATES = "templates"

    __str__ = str.__str__


TypeCodeqrIoFoldersApiOrStr: TypeAlias = Annotated[
    TypeCodeqrIoFoldersApi | str, open_enum_validator(TypeCodeqrIoFoldersApi)
]
