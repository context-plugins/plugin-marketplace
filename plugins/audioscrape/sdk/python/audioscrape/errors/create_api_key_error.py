from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

CreateApiKeyErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _CreateApiKeyError:
    def map(self, status_code: int, content: bytes) -> CreateApiKeyErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


create_api_key_error_mapper: Final[ErrorMapper[CreateApiKeyErrorBody]] = _CreateApiKeyError()
