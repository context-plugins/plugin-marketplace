from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BudgetShareFundsType(str, Enum):
    """BudgetShareFundsType."""

    DO_NOT_SHARE = "DO_NOT_SHARE"
    SHARE_MANUALLY = "SHARE_MANUALLY"
    SHARE_WITH_ALL_OWNERS = "SHARE_WITH_ALL_OWNERS"
    SHARE_WITH_ALL_MEMBERS = "SHARE_WITH_ALL_MEMBERS"
    SHARE_ALL_OWNERS_BUT_MEMBERS_MANUALLY = "SHARE_ALL_OWNERS_BUT_MEMBERS_MANUALLY"

    __str__ = str.__str__


BudgetShareFundsTypeOrStr: TypeAlias = Annotated[BudgetShareFundsType | str, open_enum_validator(BudgetShareFundsType)]
