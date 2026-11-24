from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransferMethod(str, Enum):
    """International Payment Transfer Method."""

    WIRE = "WIRE"
    LOCAL = "LOCAL"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


TransferMethodOrStr: TypeAlias = Annotated[TransferMethod | str, open_enum_validator(TransferMethod)]
