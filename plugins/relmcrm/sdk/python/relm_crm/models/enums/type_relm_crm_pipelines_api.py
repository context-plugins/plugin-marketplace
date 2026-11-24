from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRelmCrmPipelinesApi(str, Enum):
    """Semantic type; default open."""

    OPEN = "open"
    WON = "won"
    LOST = "lost"

    __str__ = str.__str__


TypeRelmCrmPipelinesApiOrStr: TypeAlias = Annotated[
    TypeRelmCrmPipelinesApi | str, open_enum_validator(TypeRelmCrmPipelinesApi)
]
