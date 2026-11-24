from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action(str, Enum):
    """archive or edit_tags"""

    ARCHIVE = "archive"
    EDIT_TAGS = "edit_tags"

    __str__ = str.__str__


ActionOrStr: TypeAlias = Annotated[Action | str, open_enum_validator(Action)]
