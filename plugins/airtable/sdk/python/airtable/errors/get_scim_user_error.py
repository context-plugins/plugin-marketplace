from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

GetScimUserErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _GetScimUserError:
    def map(self, status_code: int, content: bytes) -> GetScimUserErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


get_scim_user_error_mapper: Final[ErrorMapper[GetScimUserErrorBody]] = _GetScimUserError()
