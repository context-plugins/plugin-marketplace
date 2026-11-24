from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetInsightTypesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetInsightTypesError:
    def map(self, status_code: int, content: bytes) -> GetInsightTypesErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_insight_types_error_mapper: Final[ErrorMapper[GetInsightTypesErrorBody]] = _GetInsightTypesError()
