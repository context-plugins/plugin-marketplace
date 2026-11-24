from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name8(str, Enum):
    """A category by which the intent stage analytics were grouped."""

    INTENT_STAGE_NAME = "IntentStageName"
    SWITCHED_TO_INTENT = "SwitchedToIntent"

    __str__ = str.__str__


Name8OrStr: TypeAlias = Annotated[Name8 | str, open_enum_validator(Name8)]
