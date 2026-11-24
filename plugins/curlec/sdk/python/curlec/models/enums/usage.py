from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Usage(str, Enum):
    """single_use: auto-closes after first successful payment (requires fixed_amount=true). multiple_use: stays open for
    multiple payments."""

    SINGLE_USE = "single_use"
    MULTIPLE_USE = "multiple_use"

    __str__ = str.__str__


UsageOrStr: TypeAlias = Annotated[Usage | str, open_enum_validator(Usage)]
