from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1TasksByIdGovernanceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1TasksByIdGovernanceError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1TasksByIdGovernanceErrorBody:
        match status_code:
            case 402 | 403 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_tasks_by_id_governance_error_mapper: Final[
    ErrorMapper[PatchApiV1TasksByIdGovernanceErrorBody]
] = _PatchApiV1TasksByIdGovernanceError()
