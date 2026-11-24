from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

CreateScimGroupErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _CreateScimGroupError:
    def map(self, status_code: int, content: bytes) -> CreateScimGroupErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


create_scim_group_error_mapper: Final[ErrorMapper[CreateScimGroupErrorBody]] = _CreateScimGroupError()
