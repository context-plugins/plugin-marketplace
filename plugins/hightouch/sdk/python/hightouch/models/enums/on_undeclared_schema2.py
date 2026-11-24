from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OnUndeclaredSchema2(str, Enum):
    """What happens to events that aren't defined in the contract. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults
    to ALLOW_EVENT."""

    ALLOW_EVENT = "ALLOW_EVENT"
    BLOCK_EVENT = "BLOCK_EVENT"

    __str__ = str.__str__


OnUndeclaredSchema2OrStr: TypeAlias = Annotated[OnUndeclaredSchema2 | str, open_enum_validator(OnUndeclaredSchema2)]
