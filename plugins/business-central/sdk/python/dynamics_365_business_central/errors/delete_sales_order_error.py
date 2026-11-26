from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteSalesOrderErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSalesOrderError:
    def map(self, status_code: int, content: bytes) -> DeleteSalesOrderErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_sales_order_error_mapper: Final[ErrorMapper[DeleteSalesOrderErrorBody]] = _DeleteSalesOrderError()
