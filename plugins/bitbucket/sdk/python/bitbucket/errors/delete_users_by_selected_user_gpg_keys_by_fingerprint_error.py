from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteUsersBySelectedUserGpgKeysByFingerprintError:
    def map(self, status_code: int, content: bytes) -> DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_users_by_selected_user_gpg_keys_by_fingerprint_error_mapper: Final[
    ErrorMapper[DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody]
] = _DeleteUsersBySelectedUserGpgKeysByFingerprintError()
