from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListBudgetSuggestionsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListBudgetSuggestionsError:
    def map(self, status_code: int, content: bytes) -> ListBudgetSuggestionsErrorBody:
        match status_code:
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_budget_suggestions_error_mapper: Final[ErrorMapper[ListBudgetSuggestionsErrorBody]] = _ListBudgetSuggestionsError()
