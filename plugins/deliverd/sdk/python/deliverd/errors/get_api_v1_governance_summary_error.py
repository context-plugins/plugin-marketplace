from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1GovernanceSummaryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1GovernanceSummaryError:
    def map(self, status_code: int, content: bytes) -> GetApiV1GovernanceSummaryErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_governance_summary_error_mapper: Final[
    ErrorMapper[GetApiV1GovernanceSummaryErrorBody]
] = _GetApiV1GovernanceSummaryError()
