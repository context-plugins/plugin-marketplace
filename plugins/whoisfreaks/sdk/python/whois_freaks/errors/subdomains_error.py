from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SubdomainsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SubdomainsError:
    def map(self, status_code: int, content: bytes) -> SubdomainsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


subdomains_error_mapper: Final[ErrorMapper[SubdomainsErrorBody]] = _SubdomainsError()
