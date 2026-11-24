from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCallAnalyticsCategoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCallAnalyticsCategoryError:
    def map(self, status_code: int, content: bytes) -> GetCallAnalyticsCategoryErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_call_analytics_category_error_mapper: Final[
    ErrorMapper[GetCallAnalyticsCategoryErrorBody]
] = _GetCallAnalyticsCategoryError()
