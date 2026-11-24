from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.profile_not_found_error import ProfileNotFoundError

GetProfileProfilesProfileIdGetErrorBody: TypeAlias = ProfileNotFoundError | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetProfileProfilesProfileIdGetError:
    def map(self, status_code: int, content: bytes) -> GetProfileProfilesProfileIdGetErrorBody:
        match status_code:
            case 404:
                return decode_json[ProfileNotFoundError](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_profile_profiles_profile_id_get_error_mapper: Final[
    ErrorMapper[GetProfileProfilesProfileIdGetErrorBody]
] = _GetProfileProfilesProfileIdGetError()
