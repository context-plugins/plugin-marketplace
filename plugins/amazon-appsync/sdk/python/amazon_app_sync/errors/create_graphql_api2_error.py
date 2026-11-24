from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_limit_exceeded_exception import ApiLimitExceededException
from ..models.concurrent_modification_exception import ConcurrentModificationException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.unauthorized_exception import UnauthorizedException

CreateGraphqlApi2ErrorBody: TypeAlias = (
    ApiLimitExceededException
    | UnauthorizedException
    | ConcurrentModificationException
    | LimitExceededException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateGraphqlApi2Error:
    def map(self, status_code: int, content: bytes) -> CreateGraphqlApi2ErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiLimitExceededException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 409:
                return decode_json[ConcurrentModificationException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


create_graphql_api2_error_mapper: Final[ErrorMapper[CreateGraphqlApi2ErrorBody]] = _CreateGraphqlApi2Error()
