from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.cloudflow_v1_connections409_error1 import CloudflowV1Connections409Error1
from ..models.error import Error

DeleteCloudflowConnectionErrorBody: TypeAlias = Error | CloudflowV1Connections409Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteCloudflowConnectionError:
    def map(self, status_code: int, content: bytes) -> DeleteCloudflowConnectionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case 409:
                return decode_json[CloudflowV1Connections409Error1](content)
            case _:
                return RawError(status_code, content)


delete_cloudflow_connection_error_mapper: Final[
    ErrorMapper[DeleteCloudflowConnectionErrorBody]
] = _DeleteCloudflowConnectionError()
