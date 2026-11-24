from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RepairAction1(str, Enum):
    """Required. Repair action to take on specified resources of the node pool."""

    REPAIR_ACTION_UNSPECIFIED = "REPAIR_ACTION_UNSPECIFIED"
    DELETE = "DELETE"

    __str__ = str.__str__


RepairAction1OrStr: TypeAlias = Annotated[RepairAction1 | str, open_enum_validator(RepairAction1)]
