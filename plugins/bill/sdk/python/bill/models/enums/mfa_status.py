from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MfaStatus(str, Enum):
    DISABLED = "DISABLED"
    SETUP = "SETUP"
    CHALLENGE = "CHALLENGE"
    COMPLETE = "COMPLETE"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


MfaStatusOrStr: TypeAlias = Annotated[MfaStatus | str, open_enum_validator(MfaStatus)]
