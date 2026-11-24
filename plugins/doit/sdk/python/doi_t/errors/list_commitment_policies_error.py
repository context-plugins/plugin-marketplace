from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListCommitmentPoliciesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListCommitmentPoliciesError:
    def map(self, status_code: int, content: bytes) -> ListCommitmentPoliciesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_commitment_policies_error_mapper: Final[
    ErrorMapper[ListCommitmentPoliciesErrorBody]
] = _ListCommitmentPoliciesError()
