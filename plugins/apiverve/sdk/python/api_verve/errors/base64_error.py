from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

Base64ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _Base64Error:
    def map(self, status_code: int, content: bytes) -> Base64ErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


base64_error_mapper: Final[ErrorMapper[Base64ErrorBody]] = _Base64Error()
