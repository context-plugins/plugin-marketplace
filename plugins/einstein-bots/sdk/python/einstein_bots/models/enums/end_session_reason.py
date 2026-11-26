from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndSessionReason(str, Enum):
    USER_REQUEST = "UserRequest"
    TRANSFER = "Transfer"
    EXPIRATION = "Expiration"
    ERROR = "Error"
    OTHER = "Other"

    __str__ = str.__str__


EndSessionReasonOrStr: TypeAlias = Annotated[EndSessionReason | str, open_enum_validator(EndSessionReason)]
