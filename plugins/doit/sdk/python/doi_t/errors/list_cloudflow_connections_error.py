from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCloudflowConnectionsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudflowConnectionsError:
    def map(self, status_code: int, content: bytes) -> ListCloudflowConnectionsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloudflow_connections_error_mapper: Final[
    ErrorMapper[ListCloudflowConnectionsErrorBody]
] = _ListCloudflowConnectionsError()
