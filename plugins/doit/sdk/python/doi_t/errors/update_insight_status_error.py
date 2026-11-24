from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateInsightStatusErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateInsightStatusError:
    def map(self, status_code: int, content: bytes) -> UpdateInsightStatusErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_insight_status_error_mapper: Final[ErrorMapper[UpdateInsightStatusErrorBody]] = _UpdateInsightStatusError()
