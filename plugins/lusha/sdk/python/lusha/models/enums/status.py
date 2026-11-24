from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Lifecycle state. ``active`` and ``archived`` are filterable via the List Tables ``status`` field; ``deleted`` is
    not a filterable status."""

    ACTIVE = "active"
    ARCHIVED = "archived"
    DELETED = "deleted"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
