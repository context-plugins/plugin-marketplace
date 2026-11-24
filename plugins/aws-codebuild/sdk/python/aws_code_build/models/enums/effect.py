from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Effect(str, Enum):
    """The behavior of the proxy rule."""

    ALLOW = "ALLOW"
    DENY = "DENY"

    __str__ = str.__str__


EffectOrStr: TypeAlias = Annotated[Effect | str, open_enum_validator(Effect)]
