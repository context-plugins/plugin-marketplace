from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdFindingsByFindingIdApprovalError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_findings_by_finding_id_approval_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody]
] = _PostApiV1TasksByIdFindingsByFindingIdApprovalError()
