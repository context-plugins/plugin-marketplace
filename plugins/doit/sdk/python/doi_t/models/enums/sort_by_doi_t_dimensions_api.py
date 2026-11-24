from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTDimensionsApi(str, Enum):
    """Sort by ``id``, ``type``, or ``label``. ``key`` is an alias for ``id``."""

    ID = "id"
    TYPE = "type"
    LABEL = "label"
    KEY = "key"

    __str__ = str.__str__


SortByDoiTDimensionsApiOrStr: TypeAlias = Annotated[
    SortByDoiTDimensionsApi | str, open_enum_validator(SortByDoiTDimensionsApi)
]
