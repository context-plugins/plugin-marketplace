from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

PriceCompareErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _PriceCompareError:
    def map(self, status_code: int, content: bytes) -> PriceCompareErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429 | 503:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


price_compare_error_mapper: Final[ErrorMapper[PriceCompareErrorBody]] = _PriceCompareError()
