from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateVoiceProfileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateVoiceProfileError:
    def map(self, status_code: int, content: bytes) -> UpdateVoiceProfileErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_voice_profile_error_mapper: Final[ErrorMapper[UpdateVoiceProfileErrorBody]] = _UpdateVoiceProfileError()
