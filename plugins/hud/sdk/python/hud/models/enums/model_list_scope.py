from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelListScope(str, Enum):
    """Which catalog rows a model listing returns."""

    CATALOG = "catalog"
    OWNED = "owned"

    __str__ = str.__str__


ModelListScopeOrStr: TypeAlias = Annotated[ModelListScope | str, open_enum_validator(ModelListScope)]
