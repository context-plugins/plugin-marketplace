from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelInvoiceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelInvoiceError:
    def map(self, status_code: int, content: bytes) -> CancelInvoiceErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_invoice_error_mapper: Final[ErrorMapper[CancelInvoiceErrorBody]] = _CancelInvoiceError()
