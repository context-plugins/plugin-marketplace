from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

DeleteScimGroupErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteScimGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteScimGroupErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


delete_scim_group_error_mapper: Final[ErrorMapper[DeleteScimGroupErrorBody]] = _DeleteScimGroupError()
