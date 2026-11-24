from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

IssueInvoiceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _IssueInvoiceError:
    def map(self, status_code: int, content: bytes) -> IssueInvoiceErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


issue_invoice_error_mapper: Final[ErrorMapper[IssueInvoiceErrorBody]] = _IssueInvoiceError()
