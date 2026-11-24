from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTLabelsApi(str, Enum):
    """The type of the label (custom or preset)."""

    CUSTOM = "custom"
    PRESET = "preset"

    __str__ = str.__str__


TypeDoiTLabelsApiOrStr: TypeAlias = Annotated[TypeDoiTLabelsApi | str, open_enum_validator(TypeDoiTLabelsApi)]
