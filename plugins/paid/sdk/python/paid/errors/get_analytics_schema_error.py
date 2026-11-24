from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetAnalyticsSchemaErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetAnalyticsSchemaError:
    def map(self, status_code: int, content: bytes) -> GetAnalyticsSchemaErrorBody:
        match status_code:
            case 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_analytics_schema_error_mapper: Final[ErrorMapper[GetAnalyticsSchemaErrorBody]] = _GetAnalyticsSchemaError()
