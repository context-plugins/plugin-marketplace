from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_text

RotateApiKeyErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _RotateApiKeyError:
    def map(self, status_code: int, content: bytes) -> RotateApiKeyErrorBody:
        match status_code:
            case 401:
                return decode_text[str](content)
            case _:
                return RawError(status_code, content)


rotate_api_key_error_mapper: Final[ErrorMapper[RotateApiKeyErrorBody]] = _RotateApiKeyError()
