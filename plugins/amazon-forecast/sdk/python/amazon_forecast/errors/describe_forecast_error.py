from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeForecastErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeForecastError:
    def map(self, status_code: int, content: bytes) -> DescribeForecastErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_forecast_error_mapper: Final[ErrorMapper[DescribeForecastErrorBody]] = _DescribeForecastError()
