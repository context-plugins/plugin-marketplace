from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateFaceLivenessSessionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateFaceLivenessSessionError:
    def map(self, status_code: int, content: bytes) -> CreateFaceLivenessSessionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_face_liveness_session_error_mapper: Final[
    ErrorMapper[CreateFaceLivenessSessionErrorBody]
] = _CreateFaceLivenessSessionError()
