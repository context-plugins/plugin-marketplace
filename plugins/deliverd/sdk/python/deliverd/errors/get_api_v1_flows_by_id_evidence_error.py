from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1FlowsByIdEvidenceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1FlowsByIdEvidenceError:
    def map(self, status_code: int, content: bytes) -> GetApiV1FlowsByIdEvidenceErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_flows_by_id_evidence_error_mapper: Final[
    ErrorMapper[GetApiV1FlowsByIdEvidenceErrorBody]
] = _GetApiV1FlowsByIdEvidenceError()
