from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Present on skipped platform results; explains why a requested platform was not called."""

    NOT_ENABLED = "not_enabled"
    REQUIRES_DATES = "requires_dates"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
