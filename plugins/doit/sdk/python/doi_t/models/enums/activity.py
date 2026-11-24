from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Activity(str, Enum):
    """Activity type."""

    NODE_CREATE = "NODE_CREATE"
    NODE_UPDATE = "NODE_UPDATE"
    NODE_DELETE = "NODE_DELETE"
    LINK_CREATE = "LINK_CREATE"
    LINK_UPDATE = "LINK_UPDATE"
    LINK_DELETE = "LINK_DELETE"
    GROUP_CREATE = "GROUP_CREATE"
    GROUP_UPDATE = "GROUP_UPDATE"
    GROUP_DELETE = "GROUP_DELETE"
    ATTACHMENT_CREATE = "ATTACHMENT_CREATE"
    ATTACHMENT_UPDATE = "ATTACHMENT_UPDATE"
    ATTACHMENT_DELETE = "ATTACHMENT_DELETE"

    __str__ = str.__str__


ActivityOrStr: TypeAlias = Annotated[Activity | str, open_enum_validator(Activity)]
