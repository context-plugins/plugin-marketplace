from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OnMissing(str, Enum):
    """What happens when every source is missing or empty on a matching row. "useFallback" (default) emits the fallback
    value, which is required in that mode; "nextRule" lets the row fall through to the next rule in the group."""

    USE_FALLBACK = "useFallback"
    NEXT_RULE = "nextRule"

    __str__ = str.__str__


OnMissingOrStr: TypeAlias = Annotated[OnMissing | str, open_enum_validator(OnMissing)]
