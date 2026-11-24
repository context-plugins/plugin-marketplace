from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetVoiceProfileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetVoiceProfileError:
    def map(self, status_code: int, content: bytes) -> GetVoiceProfileErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_voice_profile_error_mapper: Final[ErrorMapper[GetVoiceProfileErrorBody]] = _GetVoiceProfileError()
