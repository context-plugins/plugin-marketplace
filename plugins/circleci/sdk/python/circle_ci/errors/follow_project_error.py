from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FollowProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FollowProjectError:
    def map(self, status_code: int, content: bytes) -> FollowProjectErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


follow_project_error_mapper: Final[ErrorMapper[FollowProjectErrorBody]] = _FollowProjectError()
