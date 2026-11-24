from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class View(str, Enum):
    """Output only. The view specifies which subset of the Task has been returned."""

    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"

    __str__ = str.__str__


ViewOrStr: TypeAlias = Annotated[View | str, open_enum_validator(View)]
