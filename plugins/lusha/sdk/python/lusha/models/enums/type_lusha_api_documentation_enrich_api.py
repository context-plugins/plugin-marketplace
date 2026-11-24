from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeLushaApiDocumentationEnrichApi(str, Enum):
    WORK = "work"
    PRIVATE = "private"
    UNKNOWN = "unknown"

    __str__ = str.__str__


TypeLushaApiDocumentationEnrichApiOrStr: TypeAlias = Annotated[
    TypeLushaApiDocumentationEnrichApi | str, open_enum_validator(TypeLushaApiDocumentationEnrichApi)
]
