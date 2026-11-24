from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RotateApiKeyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RotateApiKeyError:
    def map(self, status_code: int, content: bytes) -> RotateApiKeyErrorBody:
        match status_code:
            case 401 | 403 | 404 | 409 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


rotate_api_key_error_mapper: Final[ErrorMapper[RotateApiKeyErrorBody]] = _RotateApiKeyError()
