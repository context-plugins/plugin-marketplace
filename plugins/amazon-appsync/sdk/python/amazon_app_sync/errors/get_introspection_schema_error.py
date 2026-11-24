from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.graph_ql_schema_exception import GraphQlSchemaException
from ..models.internal_failure_exception import InternalFailureException
from ..models.not_found_exception import NotFoundException
from ..models.unauthorized_exception import UnauthorizedException

GetIntrospectionSchemaErrorBody: TypeAlias = (
    GraphQlSchemaException | UnauthorizedException | NotFoundException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _GetIntrospectionSchemaError:
    def map(self, status_code: int, content: bytes) -> GetIntrospectionSchemaErrorBody:
        match status_code:
            case 400:
                return decode_json[GraphQlSchemaException](content)
            case 401:
                return decode_json[UnauthorizedException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_introspection_schema_error_mapper: Final[
    ErrorMapper[GetIntrospectionSchemaErrorBody]
] = _GetIntrospectionSchemaError()
