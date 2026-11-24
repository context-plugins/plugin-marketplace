from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetInvoiceErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetInvoiceError:
    def map(self, status_code: int, content: bytes) -> GetInvoiceErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_invoice_error_mapper: Final[ErrorMapper[GetInvoiceErrorBody]] = _GetInvoiceError()
