from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListPurchaseOrderLinesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListPurchaseOrderLinesError:
    def map(self, status_code: int, content: bytes) -> ListPurchaseOrderLinesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_purchase_order_lines_error_mapper: Final[
    ErrorMapper[ListPurchaseOrderLinesErrorBody]
] = _ListPurchaseOrderLinesError()
