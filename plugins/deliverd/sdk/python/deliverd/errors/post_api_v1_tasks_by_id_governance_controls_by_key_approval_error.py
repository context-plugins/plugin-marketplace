from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdGovernanceControlsByKeyApprovalError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_governance_controls_by_key_approval_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody]
] = _PostApiV1TasksByIdGovernanceControlsByKeyApprovalError()
