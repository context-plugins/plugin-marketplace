from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.concurrent_modification_exception import ConcurrentModificationException
from ..models.internal_failure_exception import InternalFailureException
from ..models.service_quota_exceeded_exception import ServiceQuotaExceededException
from ..models.unauthorized_exception import UnauthorizedException

CreateApiErrorBody: TypeAlias = (
    BadRequestException
    | UnauthorizedException
    | ServiceQuotaExceededException
    | ConcurrentModificationException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateApiError:
    def map(self, status_code: int, content: bytes) -> CreateApiErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 402:
                return decode_json[ServiceQuotaExceededException](content)
            case 409:
                return decode_json[ConcurrentModificationException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


create_api_error_mapper: Final[ErrorMapper[CreateApiErrorBody]] = _CreateApiError()
