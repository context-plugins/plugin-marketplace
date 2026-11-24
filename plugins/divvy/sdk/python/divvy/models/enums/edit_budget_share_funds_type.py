from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EditBudgetShareFundsType(str, Enum):
    """The subset of BudgetShareFundsType options that users are allowed to use for updates/creates. (Other options are
    read-only.)"""

    DO_NOT_SHARE = "DO_NOT_SHARE"
    SHARE_MANUALLY = "SHARE_MANUALLY"

    __str__ = str.__str__


EditBudgetShareFundsTypeOrStr: TypeAlias = Annotated[
    EditBudgetShareFundsType | str, open_enum_validator(EditBudgetShareFundsType)
]
