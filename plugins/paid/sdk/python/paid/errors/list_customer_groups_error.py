from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListCustomerGroupsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomerGroupsError:
    def map(self, status_code: int, content: bytes) -> ListCustomerGroupsErrorBody:
        match status_code:
            case 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_customer_groups_error_mapper: Final[ErrorMapper[ListCustomerGroupsErrorBody]] = _ListCustomerGroupsError()
