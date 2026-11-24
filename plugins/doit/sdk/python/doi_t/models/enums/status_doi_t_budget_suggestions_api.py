from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTBudgetSuggestionsApi(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    DISMISSED = "dismissed"
    SKIPPED_DRAFT = "skippedDraft"

    __str__ = str.__str__


StatusDoiTBudgetSuggestionsApiOrStr: TypeAlias = Annotated[
    StatusDoiTBudgetSuggestionsApi | str, open_enum_validator(StatusDoiTBudgetSuggestionsApi)
]
