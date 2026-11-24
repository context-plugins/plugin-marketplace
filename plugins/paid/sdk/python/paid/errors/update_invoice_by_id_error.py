from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateInvoiceByIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateInvoiceByIdError:
    def map(self, status_code: int, content: bytes) -> UpdateInvoiceByIdErrorBody:
        match status_code:
            case 400 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_invoice_by_id_error_mapper: Final[ErrorMapper[UpdateInvoiceByIdErrorBody]] = _UpdateInvoiceByIdError()
