from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MfaSetupType(str, Enum):
    """Enum for different ways to do mfa setup."""

    VOICE = "VOICE"
    TEXT = "TEXT"

    __str__ = str.__str__


MfaSetupTypeOrStr: TypeAlias = Annotated[MfaSetupType | str, open_enum_validator(MfaSetupType)]
