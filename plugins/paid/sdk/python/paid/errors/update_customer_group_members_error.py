from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateCustomerGroupMembersErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateCustomerGroupMembersError:
    def map(self, status_code: int, content: bytes) -> UpdateCustomerGroupMembersErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_customer_group_members_error_mapper: Final[
    ErrorMapper[UpdateCustomerGroupMembersErrorBody]
] = _UpdateCustomerGroupMembersError()
