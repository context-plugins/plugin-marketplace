from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditGrantResultStatus(str, Enum):
    """Credit grants are active immediately when created."""

    ACTIVE = "active"

    __str__ = str.__str__


CreditGrantResultStatusOrStr: TypeAlias = Annotated[
    CreditGrantResultStatus | str, open_enum_validator(CreditGrantResultStatus)
]
