from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloseReason(str, Enum):
    """Why the QR code was closed."""

    ON_DEMAND = "on_demand"
    PAID = "paid"

    __str__ = str.__str__


CloseReasonOrStr: TypeAlias = Annotated[CloseReason | str, open_enum_validator(CloseReason)]
