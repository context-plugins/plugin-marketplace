from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefaultBehavior(str, Enum):
    """The default behavior of outgoing traffic."""

    ALLOW_ALL = "ALLOW_ALL"
    DENY_ALL = "DENY_ALL"

    __str__ = str.__str__


DefaultBehaviorOrStr: TypeAlias = Annotated[DefaultBehavior | str, open_enum_validator(DefaultBehavior)]
