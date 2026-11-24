from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_byok_credential_v2_byok_credentials_credential_id_delete_error_mapper: Final[
    ErrorMapper[DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody]
] = _DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError()
