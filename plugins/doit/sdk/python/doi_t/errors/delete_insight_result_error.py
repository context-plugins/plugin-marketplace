from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteInsightResultErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteInsightResultError:
    def map(self, status_code: int, content: bytes) -> DeleteInsightResultErrorBody:
        match status_code:
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_insight_result_error_mapper: Final[ErrorMapper[DeleteInsightResultErrorBody]] = _DeleteInsightResultError()
