from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateCloudflowConnectionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateCloudflowConnectionError:
    def map(self, status_code: int, content: bytes) -> CreateCloudflowConnectionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_cloudflow_connection_error_mapper: Final[
    ErrorMapper[CreateCloudflowConnectionErrorBody]
] = _CreateCloudflowConnectionError()
