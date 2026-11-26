from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListSalesOrdersErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListSalesOrdersError:
    def map(self, status_code: int, content: bytes) -> ListSalesOrdersErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_sales_orders_error_mapper: Final[ErrorMapper[ListSalesOrdersErrorBody]] = _ListSalesOrdersError()
