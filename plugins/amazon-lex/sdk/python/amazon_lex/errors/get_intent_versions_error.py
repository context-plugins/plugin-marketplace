from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException

GetIntentVersionsErrorBody: TypeAlias = (
    BadRequestException | NotFoundException | LimitExceededException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _GetIntentVersionsError:
    def map(self, status_code: int, content: bytes) -> GetIntentVersionsErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_intent_versions_error_mapper: Final[ErrorMapper[GetIntentVersionsErrorBody]] = _GetIntentVersionsError()
