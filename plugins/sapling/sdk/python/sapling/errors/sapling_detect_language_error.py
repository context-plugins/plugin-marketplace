from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1
from ..models.rate_limited1 import RateLimited1

SaplingDetectLanguageErrorBody: TypeAlias = Error | PaymentRequired1 | RateLimited1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingDetectLanguageError:
    def map(self, status_code: int, content: bytes) -> SaplingDetectLanguageErrorBody:
        match status_code:
            case 400 | 401 | 500 | 503:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 429:
                return decode_json[RateLimited1](content)
            case _:
                return RawError(status_code, content)


sapling_detect_language_error_mapper: Final[ErrorMapper[SaplingDetectLanguageErrorBody]] = _SaplingDetectLanguageError()
