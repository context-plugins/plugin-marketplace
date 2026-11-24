from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteAccountRoleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAccountRoleError:
    def map(self, status_code: int, content: bytes) -> DeleteAccountRoleErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_account_role_error_mapper: Final[ErrorMapper[DeleteAccountRoleErrorBody]] = _DeleteAccountRoleError()
