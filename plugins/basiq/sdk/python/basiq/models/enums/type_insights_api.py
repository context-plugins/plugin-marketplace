from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeInsightsApi(str, Enum):
    """The type of insight to generate."""

    EXPENSE_RATIO_VERIFICATION = "EXPENSE_RATIO_VERIFICATION"
    BALANCE_VERIFICATION = "BALANCE_VERIFICATION"
    ACCOUNT_VERIFICATION = "ACCOUNT_VERIFICATION"
    IDENTITY_VERIFICATION = "IDENTITY_VERIFICATION"
    INCOME_VERIFICATION = "INCOME_VERIFICATION"

    __str__ = str.__str__


TypeInsightsApiOrStr: TypeAlias = Annotated[TypeInsightsApi | str, open_enum_validator(TypeInsightsApi)]
