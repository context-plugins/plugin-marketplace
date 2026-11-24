from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

UpdateGroupPreferencesErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateGroupPreferencesError:
    def map(self, status_code: int, content: bytes) -> UpdateGroupPreferencesErrorBody:
        match status_code:
            case 400 | 403 | 404 | 422 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


update_group_preferences_error_mapper: Final[
    ErrorMapper[UpdateGroupPreferencesErrorBody]
] = _UpdateGroupPreferencesError()
