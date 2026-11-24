from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchAllPaymentLinksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchAllPaymentLinksError:
    def map(self, status_code: int, content: bytes) -> FetchAllPaymentLinksErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_all_payment_links_error_mapper: Final[ErrorMapper[FetchAllPaymentLinksErrorBody]] = _FetchAllPaymentLinksError()
