from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ExchangerateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ExchangerateError:
    def map(self, status_code: int, content: bytes) -> ExchangerateErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


exchangerate_error_mapper: Final[ErrorMapper[ExchangerateErrorBody]] = _ExchangerateError()
