from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

PollJobErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _PollJobError:
    def map(self, status_code: int, content: bytes) -> PollJobErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


poll_job_error_mapper: Final[ErrorMapper[PollJobErrorBody]] = _PollJobError()
