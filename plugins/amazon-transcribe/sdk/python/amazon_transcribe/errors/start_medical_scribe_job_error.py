from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartMedicalScribeJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartMedicalScribeJobError:
    def map(self, status_code: int, content: bytes) -> StartMedicalScribeJobErrorBody:
        match status_code:
            case 400 | 409 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_medical_scribe_job_error_mapper: Final[
    ErrorMapper[StartMedicalScribeJobErrorBody]
] = _StartMedicalScribeJobError()
