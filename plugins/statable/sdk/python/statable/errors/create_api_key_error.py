from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateApiKeyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateApiKeyError:
    def map(self, status_code: int, content: bytes) -> CreateApiKeyErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_api_key_error_mapper: Final[ErrorMapper[CreateApiKeyErrorBody]] = _CreateApiKeyError()
