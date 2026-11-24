from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.conflict_exception import ConflictException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException

DeleteBot1ErrorBody: TypeAlias = (
    BadRequestException
    | NotFoundException
    | ConflictException
    | LimitExceededException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteBot1Error:
    def map(self, status_code: int, content: bytes) -> DeleteBot1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 409:
                return decode_json[ConflictException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


delete_bot1_error_mapper: Final[ErrorMapper[DeleteBot1ErrorBody]] = _DeleteBot1Error()
