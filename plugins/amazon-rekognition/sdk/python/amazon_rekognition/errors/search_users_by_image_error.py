from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchUsersByImageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchUsersByImageError:
    def map(self, status_code: int, content: bytes) -> SearchUsersByImageErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_users_by_image_error_mapper: Final[ErrorMapper[SearchUsersByImageErrorBody]] = _SearchUsersByImageError()
