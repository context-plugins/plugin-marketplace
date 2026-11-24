from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListInvoicesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListInvoicesError:
    def map(self, status_code: int, content: bytes) -> ListInvoicesErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_invoices_error_mapper: Final[ErrorMapper[ListInvoicesErrorBody]] = _ListInvoicesError()
