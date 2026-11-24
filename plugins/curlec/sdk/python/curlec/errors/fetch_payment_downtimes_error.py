from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchPaymentDowntimesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchPaymentDowntimesError:
    def map(self, status_code: int, content: bytes) -> FetchPaymentDowntimesErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_payment_downtimes_error_mapper: Final[ErrorMapper[FetchPaymentDowntimesErrorBody]] = _FetchPaymentDowntimesError()
