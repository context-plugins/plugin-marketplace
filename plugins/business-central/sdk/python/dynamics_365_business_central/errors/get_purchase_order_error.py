from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetPurchaseOrderErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetPurchaseOrderError:
    def map(self, status_code: int, content: bytes) -> GetPurchaseOrderErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_purchase_order_error_mapper: Final[ErrorMapper[GetPurchaseOrderErrorBody]] = _GetPurchaseOrderError()
