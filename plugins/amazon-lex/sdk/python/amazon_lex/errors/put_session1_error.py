from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.conflict_exception import ConflictException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_acceptable_exception import NotAcceptableException
from ..models.not_found_exception import NotFoundException
from ..models.runtime_lex_bad_gateway_exception import RuntimeLexBadGatewayException
from ..models.runtime_lex_dependency_failed_exception import RuntimeLexDependencyFailedException

PutSession1ErrorBody: TypeAlias = (
    BadRequestException
    | NotFoundException
    | NotAcceptableException
    | ConflictException
    | RuntimeLexDependencyFailedException
    | LimitExceededException
    | InternalFailureException
    | RuntimeLexBadGatewayException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PutSession1Error:
    def map(self, status_code: int, content: bytes) -> PutSession1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 406:
                return decode_json[NotAcceptableException](content)
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
            case _:
                return RawError(status_code, content)


put_session1_error_mapper: Final[ErrorMapper[PutSession1ErrorBody]] = _PutSession1Error()
