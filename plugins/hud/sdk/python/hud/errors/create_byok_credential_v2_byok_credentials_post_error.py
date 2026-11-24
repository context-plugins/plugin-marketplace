from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CreateByokCredentialV2ByokCredentialsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateByokCredentialV2ByokCredentialsPostError:
    def map(self, status_code: int, content: bytes) -> CreateByokCredentialV2ByokCredentialsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_byok_credential_v2_byok_credentials_post_error_mapper: Final[
    ErrorMapper[CreateByokCredentialV2ByokCredentialsPostErrorBody]
] = _CreateByokCredentialV2ByokCredentialsPostError()
