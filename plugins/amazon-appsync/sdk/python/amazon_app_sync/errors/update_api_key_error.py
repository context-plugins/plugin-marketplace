from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_key_validity_out_of_bounds_exception import ApiKeyValidityOutOfBoundsException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

UpdateApiKeyErrorBody: TypeAlias = (
    ApiKeyValidityOutOfBoundsException
    | UnauthorizedException
    | NotFoundException
    | LimitExceededException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UpdateApiKeyError:
    def map(self, status_code: int, content: bytes) -> UpdateApiKeyErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiKeyValidityOutOfBoundsException](content)
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


update_api_key_error_mapper: Final[ErrorMapper[UpdateApiKeyErrorBody]] = _UpdateApiKeyError()
