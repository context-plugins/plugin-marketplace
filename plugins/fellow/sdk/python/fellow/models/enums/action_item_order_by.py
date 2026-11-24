from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionItemOrderBy(str, Enum):
    """Supported ordering options for action items."""

    CREATED_AT_DESC = "created_at_desc"
    CREATED_AT_ASC = "created_at_asc"
    UPDATED_AT_DESC = "updated_at_desc"
    UPDATED_AT_ASC = "updated_at_asc"
    DUE_DATE = "due_date"

    __str__ = str.__str__


ActionItemOrderByOrStr: TypeAlias = Annotated[ActionItemOrderBy | str, open_enum_validator(ActionItemOrderBy)]
