from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.not_found_exception import NotFoundException

GetDataSourceIntrospectionErrorBody: TypeAlias = (
    BadRequestException | NotFoundException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _GetDataSourceIntrospectionError:
    def map(self, status_code: int, content: bytes) -> GetDataSourceIntrospectionErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_data_source_introspection_error_mapper: Final[
    ErrorMapper[GetDataSourceIntrospectionErrorBody]
] = _GetDataSourceIntrospectionError()
