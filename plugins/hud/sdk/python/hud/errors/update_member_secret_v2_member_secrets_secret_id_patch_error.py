from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateMemberSecretV2MemberSecretsSecretIdPatchError:
    def map(self, status_code: int, content: bytes) -> UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


update_member_secret_v2_member_secrets_secret_id_patch_error_mapper: Final[
    ErrorMapper[UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody]
] = _UpdateMemberSecretV2MemberSecretsSecretIdPatchError()
