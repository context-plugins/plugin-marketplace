from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.graph_ql_error_response import GraphQlErrorResponse

GraphqlOperationErrorBody: TypeAlias = GraphQlErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GraphqlOperationError:
    def map(self, status_code: int, content: bytes) -> GraphqlOperationErrorBody:
        match status_code:
            case 401:
                return decode_json[GraphQlErrorResponse](content)
            case 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


graphql_operation_error_mapper: Final[ErrorMapper[GraphqlOperationErrorBody]] = _GraphqlOperationError()
