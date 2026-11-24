from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetApiV1SecretsPublicKeyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1SecretsPublicKeyError:
    def map(self, status_code: int, content: bytes) -> GetApiV1SecretsPublicKeyErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_api_v1_secrets_public_key_error_mapper: Final[
    ErrorMapper[GetApiV1SecretsPublicKeyErrorBody]
] = _GetApiV1SecretsPublicKeyError()
