from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionType(str, Enum):
    """Output only. The type of the action."""

    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    SYNC_METADATA = "SYNC_METADATA"
    SYNC_RUNTIME_DATA = "SYNC_RUNTIME_DATA"

    __str__ = str.__str__


ActionTypeOrStr: TypeAlias = Annotated[ActionType | str, open_enum_validator(ActionType)]
