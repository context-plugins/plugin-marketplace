from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1TasksByIdGovernanceGateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1TasksByIdGovernanceGateError:
    def map(self, status_code: int, content: bytes) -> GetApiV1TasksByIdGovernanceGateErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_tasks_by_id_governance_gate_error_mapper: Final[
    ErrorMapper[GetApiV1TasksByIdGovernanceGateErrorBody]
] = _GetApiV1TasksByIdGovernanceGateError()
