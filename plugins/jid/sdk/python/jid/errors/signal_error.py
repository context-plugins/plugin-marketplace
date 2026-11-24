from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SignalErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SignalError:
    def map(self, status_code: int, content: bytes) -> SignalErrorBody:
        match status_code:
            case 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


signal_error_mapper: Final[ErrorMapper[SignalErrorBody]] = _SignalError()
