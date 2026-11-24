from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubType(str, Enum):
    """Sub type of this filter"""

    USER_ID = "user_id"
    EMAIL = "email"
    PLATFORM = "platform"
    DEVICE_MODEL = "deviceModel"

    __str__ = str.__str__


SubTypeOrStr: TypeAlias = Annotated[SubType | str, open_enum_validator(SubType)]
