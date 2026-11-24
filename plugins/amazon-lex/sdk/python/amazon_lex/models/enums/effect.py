from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Effect(str, Enum):
    """Determines whether the statement allows or denies access to the resource."""

    ALLOW = "Allow"
    DENY = "Deny"

    __str__ = str.__str__


EffectOrStr: TypeAlias = Annotated[Effect | str, open_enum_validator(Effect)]
