from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_schema import BadRequestErrorSchema
from ..models.forbidden_access_error1 import ForbiddenAccessError1
from ..models.not_found_error_schema import NotFoundErrorSchema
from ..models.unauthorized_error_schema import UnauthorizedErrorSchema

GetPayeesErrorBody: TypeAlias = (
    BadRequestErrorSchema | UnauthorizedErrorSchema | ForbiddenAccessError1 | NotFoundErrorSchema | RawError
)


@dataclass(frozen=True, slots=True)
class _GetPayeesError:
    def map(self, status_code: int, content: bytes) -> GetPayeesErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorSchema](content)
            case 401:
                return decode_json[UnauthorizedErrorSchema](content)
            case 403:
                return decode_json[ForbiddenAccessError1](content)
            case 500:
                return decode_json[NotFoundErrorSchema](content)
            case _:
                return RawError(status_code, content)


get_payees_error_mapper: Final[ErrorMapper[GetPayeesErrorBody]] = _GetPayeesError()
