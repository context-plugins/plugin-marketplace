from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeSkribbleSignatureHandlingApi(str, Enum):
    PDF = "PDF"
    JSON = "JSON"
    HTML = "HTML"

    __str__ = str.__str__


TypeSkribbleSignatureHandlingApiOrStr: TypeAlias = Annotated[
    TypeSkribbleSignatureHandlingApi | str, open_enum_validator(TypeSkribbleSignatureHandlingApi)
]
