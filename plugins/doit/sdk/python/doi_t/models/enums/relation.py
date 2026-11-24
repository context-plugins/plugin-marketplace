from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Relation(str, Enum):
    """How the resource is related to the anchor. ``downstream`` / ``upstream`` are edge relations (anchor is the edge
    origin / destination respectively). ``group_member`` means the related resource is contained in the anchor (anchor
    is a group); ``group_parent`` means the related resource is a group that contains the anchor."""

    DOWNSTREAM = "downstream"
    UPSTREAM = "upstream"
    GROUP_MEMBER = "group_member"
    GROUP_PARENT = "group_parent"

    __str__ = str.__str__


RelationOrStr: TypeAlias = Annotated[Relation | str, open_enum_validator(Relation)]
