from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.operation_outcome import OperationOutcome

ReadPatientErrorBody: TypeAlias = OperationOutcome | RawError


@dataclass(frozen=True, slots=True)
class _ReadPatientError:
    def map(self, status_code: int, content: bytes) -> ReadPatientErrorBody:
        match status_code:
            case 404:
                return decode_json[OperationOutcome](content)
            case _:
                return RawError(status_code, content)


read_patient_error_mapper: Final[ErrorMapper[ReadPatientErrorBody]] = _ReadPatientError()
