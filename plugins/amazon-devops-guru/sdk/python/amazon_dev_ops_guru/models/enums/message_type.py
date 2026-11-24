from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessageType(str, Enum):
    NEW_INSIGHT = "NEW_INSIGHT"
    CLOSED_INSIGHT = "CLOSED_INSIGHT"
    NEW_ASSOCIATION = "NEW_ASSOCIATION"
    SEVERITY_UPGRADED = "SEVERITY_UPGRADED"
    NEW_RECOMMENDATION = "NEW_RECOMMENDATION"

    __str__ = str.__str__


MessageTypeOrStr: TypeAlias = Annotated[MessageType | str, open_enum_validator(MessageType)]
