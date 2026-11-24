from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.conflict_exception import ConflictException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.loop_detected_exception import LoopDetectedException
from ..models.not_found_exception import NotFoundException
from ..models.runtime_lex_bad_gateway_exception import RuntimeLexBadGatewayException
from ..models.runtime_lex_dependency_failed_exception import RuntimeLexDependencyFailedException

PostTextErrorBody: TypeAlias = (
    BadRequestException
    | NotFoundException
    | ConflictException
    | RuntimeLexDependencyFailedException
    | LimitExceededException
    | InternalFailureException
    | RuntimeLexBadGatewayException
    | LoopDetectedException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostTextError:
    def map(self, status_code: int, content: bytes) -> PostTextErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 409:
                return decode_json[ConflictException](content)
            case 424:
                return decode_json[RuntimeLexDependencyFailedException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case 502:
                return decode_json[RuntimeLexBadGatewayException](content)
            case 508:
                return decode_json[LoopDetectedException](content)
            case _:
                return RawError(status_code, content)


post_text_error_mapper: Final[ErrorMapper[PostTextErrorBody]] = _PostTextError()
