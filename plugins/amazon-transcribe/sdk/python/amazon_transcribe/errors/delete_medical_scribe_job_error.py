from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMedicalScribeJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMedicalScribeJobError:
    def map(self, status_code: int, content: bytes) -> DeleteMedicalScribeJobErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_medical_scribe_job_error_mapper: Final[
    ErrorMapper[DeleteMedicalScribeJobErrorBody]
] = _DeleteMedicalScribeJobError()
