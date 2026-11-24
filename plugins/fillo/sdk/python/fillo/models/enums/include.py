from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Include(str, Enum):
    DRAFT = "draft"

    __str__ = str.__str__


IncludeOrStr: TypeAlias = Annotated[Include | str, open_enum_validator(Include)]
