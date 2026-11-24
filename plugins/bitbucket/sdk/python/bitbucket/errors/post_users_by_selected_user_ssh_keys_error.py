from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostUsersBySelectedUserSshKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostUsersBySelectedUserSshKeysError:
    def map(self, status_code: int, content: bytes) -> PostUsersBySelectedUserSshKeysErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_users_by_selected_user_ssh_keys_error_mapper: Final[
    ErrorMapper[PostUsersBySelectedUserSshKeysErrorBody]
] = _PostUsersBySelectedUserSshKeysError()
