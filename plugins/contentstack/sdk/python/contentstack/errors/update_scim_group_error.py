from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

UpdateScimGroupErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateScimGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateScimGroupErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


update_scim_group_error_mapper: Final[ErrorMapper[UpdateScimGroupErrorBody]] = _UpdateScimGroupError()
