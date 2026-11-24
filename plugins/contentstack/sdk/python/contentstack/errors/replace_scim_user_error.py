from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

ReplaceScimUserErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _ReplaceScimUserError:
    def map(self, status_code: int, content: bytes) -> ReplaceScimUserErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


replace_scim_user_error_mapper: Final[ErrorMapper[ReplaceScimUserErrorBody]] = _ReplaceScimUserError()
