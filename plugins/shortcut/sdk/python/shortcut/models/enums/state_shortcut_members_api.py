from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateShortcutMembersApi(str, Enum):
    """The user state, one of partial, full, disabled, or imported. A partial user is disabled, has no means to log in,
    and is not an import user. A full user is enabled and has a means to log in. A disabled user is disabled and has a
    means to log in. An import user is disabled, has no means to log in, and is marked as an import user."""

    PARTIAL = "partial"
    FULL = "full"
    DISABLED = "disabled"
    IMPORTED = "imported"

    __str__ = str.__str__


StateShortcutMembersApiOrStr: TypeAlias = Annotated[
    StateShortcutMembersApi | str, open_enum_validator(StateShortcutMembersApi)
]
