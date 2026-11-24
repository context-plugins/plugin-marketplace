from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SetSmbGuestPasswordErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SetSmbGuestPasswordError:
    def map(self, status_code: int, content: bytes) -> SetSmbGuestPasswordErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


set_smb_guest_password_error_mapper: Final[ErrorMapper[SetSmbGuestPasswordErrorBody]] = _SetSmbGuestPasswordError()
