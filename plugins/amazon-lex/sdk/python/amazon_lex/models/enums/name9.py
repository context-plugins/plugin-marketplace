from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name9(str, Enum):
    """Specifies whether to group the intent stages by their name or the intent to which the session was switched."""

    INTENT_STAGE_NAME = "IntentStageName"
    SWITCHED_TO_INTENT = "SwitchedToIntent"

    __str__ = str.__str__


Name9OrStr: TypeAlias = Annotated[Name9 | str, open_enum_validator(Name9)]
