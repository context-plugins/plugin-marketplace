from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostUsersBySelectedUserGpgKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostUsersBySelectedUserGpgKeysError:
    def map(self, status_code: int, content: bytes) -> PostUsersBySelectedUserGpgKeysErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_users_by_selected_user_gpg_keys_error_mapper: Final[
    ErrorMapper[PostUsersBySelectedUserGpgKeysErrorBody]
] = _PostUsersBySelectedUserGpgKeysError()
