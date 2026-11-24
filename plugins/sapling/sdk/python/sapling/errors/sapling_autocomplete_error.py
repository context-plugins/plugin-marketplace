from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.payload_too_large1 import PayloadTooLarge1
from ..models.payment_required1 import PaymentRequired1
from ..models.rate_limited1 import RateLimited1

SaplingAutocompleteErrorBody: TypeAlias = Error | PaymentRequired1 | PayloadTooLarge1 | RateLimited1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingAutocompleteError:
    def map(self, status_code: int, content: bytes) -> SaplingAutocompleteErrorBody:
        match status_code:
            case 400 | 401 | 500 | 503:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[PayloadTooLarge1](content)
            case 429:
                return decode_json[RateLimited1](content)
            case _:
                return RawError(status_code, content)


sapling_autocomplete_error_mapper: Final[ErrorMapper[SaplingAutocompleteErrorBody]] = _SaplingAutocompleteError()
