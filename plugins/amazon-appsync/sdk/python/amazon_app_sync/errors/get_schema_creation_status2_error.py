from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

GetSchemaCreationStatus2ErrorBody: TypeAlias = (
    BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _GetSchemaCreationStatus2Error:
    def map(self, status_code: int, content: bytes) -> GetSchemaCreationStatus2ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_schema_creation_status2_error_mapper: Final[
    ErrorMapper[GetSchemaCreationStatus2ErrorBody]
] = _GetSchemaCreationStatus2Error()
