from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

DeleteCustomerGroupErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _DeleteCustomerGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteCustomerGroupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


delete_customer_group_error_mapper: Final[ErrorMapper[DeleteCustomerGroupErrorBody]] = _DeleteCustomerGroupError()
