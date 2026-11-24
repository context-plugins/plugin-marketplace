from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    SEND_EMAIL = "send_email"
    SEND_MESSAGE = "send_message"
    CREATE_ACTIVITY = "create_activity"
    MOVE_DEAL_STAGE = "move_deal_stage"
    SET_FIELD = "set_field"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
