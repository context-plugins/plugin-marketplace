from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListCustomerGroupUserGroupsErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomerGroupUserGroupsError:
    def map(self, status_code: int, content: bytes) -> ListCustomerGroupUserGroupsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_customer_group_user_groups_error_mapper: Final[
    ErrorMapper[ListCustomerGroupUserGroupsErrorBody]
] = _ListCustomerGroupUserGroupsError()
