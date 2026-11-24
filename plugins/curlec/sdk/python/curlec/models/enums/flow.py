from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Flow(str, Enum):
    """Flow type for VPA receivers."""

    UPI_QR = "upi_qr"

    __str__ = str.__str__


FlowOrStr: TypeAlias = Annotated[Flow | str, open_enum_validator(Flow)]
