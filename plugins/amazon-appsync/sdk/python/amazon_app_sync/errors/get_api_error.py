from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

GetApiErrorBody: TypeAlias = (
    BadRequestException
    | UnauthorizedException
    | AccessDeniedException
    | NotFoundException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetApiError:
    def map(self, status_code: int, content: bytes) -> GetApiErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_api_error_mapper: Final[ErrorMapper[GetApiErrorBody]] = _GetApiError()
