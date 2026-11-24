from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

ApiKeyUsageErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _ApiKeyUsageError:
    def map(self, status_code: int, content: bytes) -> ApiKeyUsageErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


api_key_usage_error_mapper: Final[ErrorMapper[ApiKeyUsageErrorBody]] = _ApiKeyUsageError()
