from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """Tranche type. ``ordinary`` for the recurring/regular dividend; ``special`` for an extra/bonus/one-off dividend.
    When an issuer proposes both for the same date, they are returned as two separate events."""

    ORDINARY = "ordinary"
    SPECIAL = "special"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
