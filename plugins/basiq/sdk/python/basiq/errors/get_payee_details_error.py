from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_schema import BadRequestErrorSchema
from ..models.forbidden_access_error1 import ForbiddenAccessError1
from ..models.not_found_error_schema import NotFoundErrorSchema
from ..models.unauthorized_error_schema import UnauthorizedErrorSchema

GetPayeeDetailsErrorBody: TypeAlias = (
    BadRequestErrorSchema | UnauthorizedErrorSchema | ForbiddenAccessError1 | NotFoundErrorSchema | RawError
)


@dataclass(frozen=True, slots=True)
class _GetPayeeDetailsError:
    def map(self, status_code: int, content: bytes) -> GetPayeeDetailsErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorSchema](content)
            case 401:
                return decode_json[UnauthorizedErrorSchema](content)
            case 403:
                return decode_json[ForbiddenAccessError1](content)
            case 404 | 500:
                return decode_json[NotFoundErrorSchema](content)
            case _:
                return RawError(status_code, content)


get_payee_details_error_mapper: Final[ErrorMapper[GetPayeeDetailsErrorBody]] = _GetPayeeDetailsError()
