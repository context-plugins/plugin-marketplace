from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdGovernanceEvidenceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdGovernanceEvidenceError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdGovernanceEvidenceErrorBody:
        match status_code:
            case 402 | 409 | 502:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_governance_evidence_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdGovernanceEvidenceErrorBody]
] = _PostApiV1TasksByIdGovernanceEvidenceError()
