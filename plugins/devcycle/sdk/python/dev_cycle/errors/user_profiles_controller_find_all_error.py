from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UserProfilesControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UserProfilesControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> UserProfilesControllerFindAllErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


user_profiles_controller_find_all_error_mapper: Final[
    ErrorMapper[UserProfilesControllerFindAllErrorBody]
] = _UserProfilesControllerFindAllError()
