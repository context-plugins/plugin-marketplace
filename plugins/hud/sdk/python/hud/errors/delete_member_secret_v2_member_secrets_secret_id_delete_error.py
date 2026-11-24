from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteMemberSecretV2MemberSecretsSecretIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_member_secret_v2_member_secrets_secret_id_delete_error_mapper: Final[
    ErrorMapper[DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody]
] = _DeleteMemberSecretV2MemberSecretsSecretIdDeleteError()
