from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdGovernanceReassessmentsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdGovernanceReassessmentsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdGovernanceReassessmentsErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_governance_reassessments_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdGovernanceReassessmentsErrorBody]
] = _PostApiV1TasksByIdGovernanceReassessmentsError()
