from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListByokCredentialsV2ByokCredentialsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListByokCredentialsV2ByokCredentialsGetError:
    def map(self, status_code: int, content: bytes) -> ListByokCredentialsV2ByokCredentialsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_byok_credentials_v2_byok_credentials_get_error_mapper: Final[
    ErrorMapper[ListByokCredentialsV2ByokCredentialsGetErrorBody]
] = _ListByokCredentialsV2ByokCredentialsGetError()
