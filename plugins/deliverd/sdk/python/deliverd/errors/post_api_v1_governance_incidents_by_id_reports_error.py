from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1GovernanceIncidentsByIdReportsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1GovernanceIncidentsByIdReportsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1GovernanceIncidentsByIdReportsErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_governance_incidents_by_id_reports_error_mapper: Final[
    ErrorMapper[PostApiV1GovernanceIncidentsByIdReportsErrorBody]
] = _PostApiV1GovernanceIncidentsByIdReportsError()
