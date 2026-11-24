from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTWidgetsBetaApi(str, Enum):
    """Whether the widget is supplied by DoiT or defined by a customer."""

    CUSTOM = "custom"
    PRESET = "preset"

    __str__ = str.__str__


TypeDoiTWidgetsBetaApiOrStr: TypeAlias = Annotated[
    TypeDoiTWidgetsBetaApi | str, open_enum_validator(TypeDoiTWidgetsBetaApi)
]
