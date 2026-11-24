from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

RatesRatesGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RatesRatesGetError:
    def map(self, status_code: int, content: bytes) -> RatesRatesGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


rates_rates_get_error_mapper: Final[ErrorMapper[RatesRatesGetErrorBody]] = _RatesRatesGetError()
