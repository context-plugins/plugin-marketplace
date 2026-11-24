from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTBudgetSuggestionsApi(str, Enum):
    DISMISSED = "dismissed"

    __str__ = str.__str__


Status1DoiTBudgetSuggestionsApiOrStr: TypeAlias = Annotated[
    Status1DoiTBudgetSuggestionsApi | str, open_enum_validator(Status1DoiTBudgetSuggestionsApi)
]
