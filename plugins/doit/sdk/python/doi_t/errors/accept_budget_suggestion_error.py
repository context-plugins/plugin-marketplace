from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AcceptBudgetSuggestionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AcceptBudgetSuggestionError:
    def map(self, status_code: int, content: bytes) -> AcceptBudgetSuggestionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


accept_budget_suggestion_error_mapper: Final[
    ErrorMapper[AcceptBudgetSuggestionErrorBody]
] = _AcceptBudgetSuggestionError()
