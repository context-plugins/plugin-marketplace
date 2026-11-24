from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchAllPaymentsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchAllPaymentsError:
    def map(self, status_code: int, content: bytes) -> FetchAllPaymentsErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_all_payments_error_mapper: Final[ErrorMapper[FetchAllPaymentsErrorBody]] = _FetchAllPaymentsError()
