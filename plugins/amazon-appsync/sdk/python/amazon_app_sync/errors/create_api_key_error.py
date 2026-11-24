from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_key_limit_exceeded_exception import ApiKeyLimitExceededException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

CreateApiKeyErrorBody: TypeAlias = (
    ApiKeyLimitExceededException
    | UnauthorizedException
    | NotFoundException
    | LimitExceededException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateApiKeyError:
    def map(self, status_code: int, content: bytes) -> CreateApiKeyErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiKeyLimitExceededException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


create_api_key_error_mapper: Final[ErrorMapper[CreateApiKeyErrorBody]] = _CreateApiKeyError()
