from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

DeleteApiKeyErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _DeleteApiKeyError:
    def map(self, status_code: int, content: bytes) -> DeleteApiKeyErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


delete_api_key_error_mapper: Final[ErrorMapper[DeleteApiKeyErrorBody]] = _DeleteApiKeyError()
