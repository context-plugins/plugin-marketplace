from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Include(str, Enum):
    VISIBLE_FIELD_IDS = "visibleFieldIds"

    __str__ = str.__str__


IncludeOrStr: TypeAlias = Annotated[Include | str, open_enum_validator(Include)]
