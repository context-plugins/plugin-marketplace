from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutProjectsByProjectUidErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutProjectsByProjectUidError:
    def map(self, status_code: int, content: bytes) -> PutProjectsByProjectUidErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_projects_by_project_uid_error_mapper: Final[
    ErrorMapper[PutProjectsByProjectUidErrorBody]
] = _PutProjectsByProjectUidError()
