from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

CreateScimUserErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _CreateScimUserError:
    def map(self, status_code: int, content: bytes) -> CreateScimUserErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 429:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


create_scim_user_error_mapper: Final[ErrorMapper[CreateScimUserErrorBody]] = _CreateScimUserError()
