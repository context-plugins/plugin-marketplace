from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.runtime_v2_lex_internal_server_exception import RuntimeV2LexInternalServerException
from ..models.runtime_v2_lex_resource_not_found_exception import RuntimeV2LexResourceNotFoundException
from ..models.runtime_v2_lex_throttling_exception import RuntimeV2LexThrottlingException
from ..models.runtime_v2_lex_validation_exception import RuntimeV2LexValidationException

GetSessionErrorBody: TypeAlias = (
    RuntimeV2LexValidationException
    | AccessDeniedException
    | RuntimeV2LexResourceNotFoundException
    | RuntimeV2LexThrottlingException
    | RuntimeV2LexInternalServerException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetSessionError:
    def map(self, status_code: int, content: bytes) -> GetSessionErrorBody:
        match status_code:
            case 400:
                return decode_json[RuntimeV2LexValidationException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 404:
                return decode_json[RuntimeV2LexResourceNotFoundException](content)
            case 429:
                return decode_json[RuntimeV2LexThrottlingException](content)
            case 500:
                return decode_json[RuntimeV2LexInternalServerException](content)
            case _:
                return RawError(status_code, content)


get_session_error_mapper: Final[ErrorMapper[GetSessionErrorBody]] = _GetSessionError()
