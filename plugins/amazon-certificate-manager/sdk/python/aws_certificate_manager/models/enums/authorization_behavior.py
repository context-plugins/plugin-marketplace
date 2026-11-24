from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthorizationBehavior(str, Enum):
    """The authorization behavior of the ACME endpoint."""

    PRE_APPROVED = "PRE_APPROVED"

    __str__ = str.__str__


AuthorizationBehaviorOrStr: TypeAlias = Annotated[
    AuthorizationBehavior | str, open_enum_validator(AuthorizationBehavior)
]
