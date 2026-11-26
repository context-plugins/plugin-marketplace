from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MfaPhoneType(str, Enum):
    """Response for MFA Phone Type."""

    MOBILE = "MOBILE"
    HOME = "HOME"
    WORK = "WORK"

    __str__ = str.__str__


MfaPhoneTypeOrStr: TypeAlias = Annotated[MfaPhoneType | str, open_enum_validator(MfaPhoneType)]
