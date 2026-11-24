from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateVoiceProfileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateVoiceProfileError:
    def map(self, status_code: int, content: bytes) -> CreateVoiceProfileErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_voice_profile_error_mapper: Final[ErrorMapper[CreateVoiceProfileErrorBody]] = _CreateVoiceProfileError()
