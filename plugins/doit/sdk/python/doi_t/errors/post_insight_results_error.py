from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostInsightResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostInsightResultsError:
    def map(self, status_code: int, content: bytes) -> PostInsightResultsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_insight_results_error_mapper: Final[ErrorMapper[PostInsightResultsErrorBody]] = _PostInsightResultsError()
