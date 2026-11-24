from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhoneType(str, Enum):
    """The type of phone number"""

    MOBILE = "Mobile"
    DIRECT = "Direct"
    PHONE = "Phone"

    __str__ = str.__str__


PhoneTypeOrStr: TypeAlias = Annotated[PhoneType | str, open_enum_validator(PhoneType)]
