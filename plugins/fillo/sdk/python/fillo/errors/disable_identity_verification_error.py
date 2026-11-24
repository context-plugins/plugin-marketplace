from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DisableIdentityVerificationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DisableIdentityVerificationError:
    def map(self, status_code: int, content: bytes) -> DisableIdentityVerificationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


disable_identity_verification_error_mapper: Final[
    ErrorMapper[DisableIdentityVerificationErrorBody]
] = _DisableIdentityVerificationError()
