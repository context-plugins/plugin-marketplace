from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetApiUsageErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetApiUsageError:
    def map(self, status_code: int, content: bytes) -> GetApiUsageErrorBody:
        match status_code:
            case 401 | 429 | 500:
                return RawError(status_code, content)
            case 403 | 422 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_api_usage_error_mapper: Final[ErrorMapper[GetApiUsageErrorBody]] = _GetApiUsageError()
