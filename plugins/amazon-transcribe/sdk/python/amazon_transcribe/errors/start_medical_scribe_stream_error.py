from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.conflict_exception import ConflictException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.service_unavailable_exception import ServiceUnavailableException

StartMedicalScribeStreamErrorBody: TypeAlias = (
    BadRequestException
    | ConflictException
    | LimitExceededException
    | InternalFailureException
    | ServiceUnavailableException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _StartMedicalScribeStreamError:
    def map(self, status_code: int, content: bytes) -> StartMedicalScribeStreamErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 409:
                return decode_json[ConflictException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case 503:
                return decode_json[ServiceUnavailableException](content)
            case _:
                return RawError(status_code, content)


start_medical_scribe_stream_error_mapper: Final[
    ErrorMapper[StartMedicalScribeStreamErrorBody]
] = _StartMedicalScribeStreamError()
