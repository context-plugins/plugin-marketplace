from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateSalesOrderErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateSalesOrderError:
    def map(self, status_code: int, content: bytes) -> UpdateSalesOrderErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_sales_order_error_mapper: Final[ErrorMapper[UpdateSalesOrderErrorBody]] = _UpdateSalesOrderError()
