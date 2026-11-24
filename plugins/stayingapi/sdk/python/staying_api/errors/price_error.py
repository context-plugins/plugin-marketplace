from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

PriceErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _PriceError:
    def map(self, status_code: int, content: bytes) -> PriceErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429 | 503:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


price_error_mapper: Final[ErrorMapper[PriceErrorBody]] = _PriceError()
