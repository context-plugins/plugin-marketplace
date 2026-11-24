from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillApproveDenyAction(str, Enum):
    """Bill approval and denial actions."""

    APPROVE = "APPROVE"
    DENY = "DENY"

    __str__ = str.__str__


BillApproveDenyActionOrStr: TypeAlias = Annotated[
    BillApproveDenyAction | str, open_enum_validator(BillApproveDenyAction)
]
