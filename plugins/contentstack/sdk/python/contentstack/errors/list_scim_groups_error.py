from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.scim_error import ScimError

ListScimGroupsErrorBody: TypeAlias = ScimError | RawError


@dataclass(frozen=True, slots=True)
class _ListScimGroupsError:
    def map(self, status_code: int, content: bytes) -> ListScimGroupsErrorBody:
        match status_code:
            case 401:
                return decode_json[ScimError](content)
            case _:
                return RawError(status_code, content)


list_scim_groups_error_mapper: Final[ErrorMapper[ListScimGroupsErrorBody]] = _ListScimGroupsError()
