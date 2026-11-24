from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCallAnalyticsCategoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCallAnalyticsCategoriesError:
    def map(self, status_code: int, content: bytes) -> ListCallAnalyticsCategoriesErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_call_analytics_categories_error_mapper: Final[
    ErrorMapper[ListCallAnalyticsCategoriesErrorBody]
] = _ListCallAnalyticsCategoriesError()
