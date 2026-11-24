from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAllVoiceProfilesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAllVoiceProfilesError:
    def map(self, status_code: int, content: bytes) -> GetAllVoiceProfilesErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_all_voice_profiles_error_mapper: Final[ErrorMapper[GetAllVoiceProfilesErrorBody]] = _GetAllVoiceProfilesError()
