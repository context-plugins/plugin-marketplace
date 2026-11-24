from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RepairAction(str, Enum):
    """Required. Repair action to take on specified resources of the node pool."""

    REPAIR_ACTION_UNSPECIFIED = "REPAIR_ACTION_UNSPECIFIED"
    REPLACE = "REPLACE"

    __str__ = str.__str__


RepairActionOrStr: TypeAlias = Annotated[RepairAction | str, open_enum_validator(RepairAction)]
