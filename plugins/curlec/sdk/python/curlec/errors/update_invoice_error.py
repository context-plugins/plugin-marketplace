from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateInvoiceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateInvoiceError:
    def map(self, status_code: int, content: bytes) -> UpdateInvoiceErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_invoice_error_mapper: Final[ErrorMapper[UpdateInvoiceErrorBody]] = _UpdateInvoiceError()
