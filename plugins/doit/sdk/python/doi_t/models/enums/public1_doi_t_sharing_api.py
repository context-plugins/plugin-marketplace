from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Public1DoiTSharingApi(str, Enum):
    """The type of permissions granted to all users in the organization for this resource.

    Allocations (single and group) always have at least ``viewer`` public access, so it cannot be cleared:
    - If ``public`` is omitted, the stored value is kept.
    - An empty string (``""``) is accepted for backward compatibility and is treated as ``viewer``.
    - An explicit ``null`` is rejected with ``400 Bad Request``.

    For Reports, Budgets, and Alerts, an omitted or ``null`` value sets ``public`` to ``null`` (no public access)."""

    EDITOR = "editor"
    VIEWER = "viewer"

    __str__ = str.__str__


Public1DoiTSharingApiOrStr: TypeAlias = Annotated[
    Public1DoiTSharingApi | str, open_enum_validator(Public1DoiTSharingApi)
]
