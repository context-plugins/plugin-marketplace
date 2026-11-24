from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListMemberSecretsV2MemberSecretsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListMemberSecretsV2MemberSecretsGetError:
    def map(self, status_code: int, content: bytes) -> ListMemberSecretsV2MemberSecretsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_member_secrets_v2_member_secrets_get_error_mapper: Final[
    ErrorMapper[ListMemberSecretsV2MemberSecretsGetErrorBody]
] = _ListMemberSecretsV2MemberSecretsGetError()
