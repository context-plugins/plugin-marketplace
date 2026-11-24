from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonDoiTBudgetSuggestionsApi(str, Enum):
    NOT_RELEVANT = "not_relevant"
    WRONG_AMOUNT = "wrong_amount"
    COVERED_ELSEWHERE = "covered_elsewhere"
    OTHER = "other"

    __str__ = str.__str__


ReasonDoiTBudgetSuggestionsApiOrStr: TypeAlias = Annotated[
    ReasonDoiTBudgetSuggestionsApi | str, open_enum_validator(ReasonDoiTBudgetSuggestionsApi)
]
