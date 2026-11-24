from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeLagsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeLagsError:
    def map(self, status_code: int, content: bytes) -> DescribeLagsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_lags_error_mapper: Final[ErrorMapper[DescribeLagsErrorBody]] = _DescribeLagsError()
