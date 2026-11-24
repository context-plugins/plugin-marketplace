from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.concurrent_modification_exception import ConcurrentModificationException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

AssociateSourceGraphqlApiErrorBody: TypeAlias = (
    BadRequestException
    | UnauthorizedException
    | NotFoundException
    | ConcurrentModificationException
    | LimitExceededException
    | InternalFailureException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AssociateSourceGraphqlApiError:
    def map(self, status_code: int, content: bytes) -> AssociateSourceGraphqlApiErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 409:
                return decode_json[ConcurrentModificationException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


associate_source_graphql_api_error_mapper: Final[
    ErrorMapper[AssociateSourceGraphqlApiErrorBody]
] = _AssociateSourceGraphqlApiError()
