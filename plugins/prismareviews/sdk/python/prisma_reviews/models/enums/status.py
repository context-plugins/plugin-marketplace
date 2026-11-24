from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """``pending`` (waiting for the owner to approve OAuth), ``active``, ``reauth_required`` (the platform rejected the
    stored token or key) or ``disconnected``."""

    PENDING = "pending"
    ACTIVE = "active"
    REAUTH_REQUIRED = "reauth_required"
    DISCONNECTED = "disconnected"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
