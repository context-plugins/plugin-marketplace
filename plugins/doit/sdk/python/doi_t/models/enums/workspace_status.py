from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WorkspaceStatus(str, Enum):
    """Integration status. Reconnect for inactive; grant private-channel scopes for missing_private_scope. None means no
    usable workspace was found; a shared channel may still be available."""

    NONE = "none"
    OK = "ok"
    INACTIVE = "inactive"
    MISSING_PRIVATE_SCOPE = "missing_private_scope"

    __str__ = str.__str__


WorkspaceStatusOrStr: TypeAlias = Annotated[WorkspaceStatus | str, open_enum_validator(WorkspaceStatus)]
