from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

UnassignCustomerGroupUserGroupErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _UnassignCustomerGroupUserGroupError:
    def map(self, status_code: int, content: bytes) -> UnassignCustomerGroupUserGroupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


unassign_customer_group_user_group_error_mapper: Final[
    ErrorMapper[UnassignCustomerGroupUserGroupErrorBody]
] = _UnassignCustomerGroupUserGroupError()
