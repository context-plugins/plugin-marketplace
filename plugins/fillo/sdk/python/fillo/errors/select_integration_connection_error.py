from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SelectIntegrationConnectionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SelectIntegrationConnectionError:
    def map(self, status_code: int, content: bytes) -> SelectIntegrationConnectionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


select_integration_connection_error_mapper: Final[
    ErrorMapper[SelectIntegrationConnectionErrorBody]
] = _SelectIntegrationConnectionError()
