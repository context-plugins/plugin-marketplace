from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

DeleteBrowserProfileProfilesProfileIdDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteBrowserProfileProfilesProfileIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteBrowserProfileProfilesProfileIdDeleteErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_browser_profile_profiles_profile_id_delete_error_mapper: Final[
    ErrorMapper[DeleteBrowserProfileProfilesProfileIdDeleteErrorBody]
] = _DeleteBrowserProfileProfilesProfileIdDeleteError()
