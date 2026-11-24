from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetFaceLivenessSessionResultsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetFaceLivenessSessionResultsError:
    def map(self, status_code: int, content: bytes) -> GetFaceLivenessSessionResultsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_face_liveness_session_results_error_mapper: Final[
    ErrorMapper[GetFaceLivenessSessionResultsErrorBody]
] = _GetFaceLivenessSessionResultsError()
