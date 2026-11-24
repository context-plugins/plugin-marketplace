from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListAwsOrganizationsErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListAwsOrganizationsError:
    def map(self, status_code: int, content: bytes) -> ListAwsOrganizationsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_aws_organizations_error_mapper: Final[ErrorMapper[ListAwsOrganizationsErrorBody]] = _ListAwsOrganizationsError()
