from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetUsersBySelectedUserGpgKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetUsersBySelectedUserGpgKeysError:
    def map(self, status_code: int, content: bytes) -> GetUsersBySelectedUserGpgKeysErrorBody:
        match status_code:
            case 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_users_by_selected_user_gpg_keys_error_mapper: Final[
    ErrorMapper[GetUsersBySelectedUserGpgKeysErrorBody]
] = _GetUsersBySelectedUserGpgKeysError()
