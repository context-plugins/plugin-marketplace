from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_me400_error1 import ApiV2Me400Error1

VerifyIdentityErrorBody: TypeAlias = ApiV2Me400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _VerifyIdentityError:
    def map(self, status_code: int, content: bytes) -> VerifyIdentityErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV2Me400Error1](content)
            case _:
                return RawError(status_code, content)


verify_identity_error_mapper: Final[ErrorMapper[VerifyIdentityErrorBody]] = _VerifyIdentityError()
