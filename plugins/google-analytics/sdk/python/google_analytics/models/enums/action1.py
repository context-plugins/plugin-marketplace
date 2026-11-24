from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action1(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    CREATED = "CREATED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"

    __str__ = str.__str__


Action1OrStr: TypeAlias = Annotated[Action1 | str, open_enum_validator(Action1)]
