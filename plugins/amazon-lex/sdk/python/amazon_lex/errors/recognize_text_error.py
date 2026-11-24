from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.bad_gateway_exception import BadGatewayException
from ..models.dependency_failed_exception import DependencyFailedException
from ..models.runtime_v2_lex_conflict_exception import RuntimeV2LexConflictException
from ..models.runtime_v2_lex_internal_server_exception import RuntimeV2LexInternalServerException
from ..models.runtime_v2_lex_resource_not_found_exception import RuntimeV2LexResourceNotFoundException
from ..models.runtime_v2_lex_throttling_exception import RuntimeV2LexThrottlingException
from ..models.runtime_v2_lex_validation_exception import RuntimeV2LexValidationException

RecognizeTextErrorBody: TypeAlias = (
    RuntimeV2LexValidationException
    | AccessDeniedException
    | RuntimeV2LexResourceNotFoundException
    | RuntimeV2LexConflictException
    | DependencyFailedException
    | RuntimeV2LexThrottlingException
    | RuntimeV2LexInternalServerException
    | BadGatewayException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _RecognizeTextError:
    def map(self, status_code: int, content: bytes) -> RecognizeTextErrorBody:
        match status_code:
            case 400:
                return decode_json[RuntimeV2LexValidationException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 404:
                return decode_json[RuntimeV2LexResourceNotFoundException](content)
            case 409:
                return decode_json[RuntimeV2LexConflictException](content)
            case 424:
                return decode_json[DependencyFailedException](content)
            case 429:
                return decode_json[RuntimeV2LexThrottlingException](content)
            case 500:
                return decode_json[RuntimeV2LexInternalServerException](content)
            case 502:
                return decode_json[BadGatewayException](content)
            case _:
                return RawError(status_code, content)


recognize_text_error_mapper: Final[ErrorMapper[RecognizeTextErrorBody]] = _RecognizeTextError()
