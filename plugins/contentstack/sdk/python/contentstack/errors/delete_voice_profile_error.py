from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteVoiceProfileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteVoiceProfileError:
    def map(self, status_code: int, content: bytes) -> DeleteVoiceProfileErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_voice_profile_error_mapper: Final[ErrorMapper[DeleteVoiceProfileErrorBody]] = _DeleteVoiceProfileError()
