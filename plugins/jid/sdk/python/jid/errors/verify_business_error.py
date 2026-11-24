from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

VerifyBusinessErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _VerifyBusinessError:
    def map(self, status_code: int, content: bytes) -> VerifyBusinessErrorBody:
        match status_code:
            case 400 | 402 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


verify_business_error_mapper: Final[ErrorMapper[VerifyBusinessErrorBody]] = _VerifyBusinessError()
