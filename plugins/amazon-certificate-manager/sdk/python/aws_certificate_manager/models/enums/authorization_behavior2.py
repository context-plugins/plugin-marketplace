from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthorizationBehavior2(str, Enum):
    """The updated authorization behavior."""

    PRE_APPROVED = "PRE_APPROVED"

    __str__ = str.__str__


AuthorizationBehavior2OrStr: TypeAlias = Annotated[
    AuthorizationBehavior2 | str, open_enum_validator(AuthorizationBehavior2)
]
