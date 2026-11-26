from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateSalesOrderErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateSalesOrderError:
    def map(self, status_code: int, content: bytes) -> CreateSalesOrderErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_sales_order_error_mapper: Final[ErrorMapper[CreateSalesOrderErrorBody]] = _CreateSalesOrderError()
