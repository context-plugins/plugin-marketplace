from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetMedicalScribeJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetMedicalScribeJobError:
    def map(self, status_code: int, content: bytes) -> GetMedicalScribeJobErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_medical_scribe_job_error_mapper: Final[ErrorMapper[GetMedicalScribeJobErrorBody]] = _GetMedicalScribeJobError()
