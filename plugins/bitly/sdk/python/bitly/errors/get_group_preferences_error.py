from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupPreferencesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupPreferencesError:
    def map(self, status_code: int, content: bytes) -> GetGroupPreferencesErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_preferences_error_mapper: Final[ErrorMapper[GetGroupPreferencesErrorBody]] = _GetGroupPreferencesError()
