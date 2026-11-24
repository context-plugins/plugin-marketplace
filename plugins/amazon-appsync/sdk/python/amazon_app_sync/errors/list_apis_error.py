from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.unauthorized_exception import UnauthorizedException

ListApisErrorBody: TypeAlias = BadRequestException | UnauthorizedException | InternalFailureException | RawError


@dataclass(frozen=True, slots=True)
class _ListApisError:
    def map(self, status_code: int, content: bytes) -> ListApisErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


list_apis_error_mapper: Final[ErrorMapper[ListApisErrorBody]] = _ListApisError()
