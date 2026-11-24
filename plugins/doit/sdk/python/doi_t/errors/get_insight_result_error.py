from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetInsightResultErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetInsightResultError:
    def map(self, status_code: int, content: bytes) -> GetInsightResultErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_insight_result_error_mapper: Final[ErrorMapper[GetInsightResultErrorBody]] = _GetInsightResultError()
