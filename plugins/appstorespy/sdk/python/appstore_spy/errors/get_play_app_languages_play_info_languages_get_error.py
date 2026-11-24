from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.play_info_languages401_error1 import PlayInfoLanguages401Error1

GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody: TypeAlias = PlayInfoLanguages401Error1 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPlayAppLanguagesPlayInfoLanguagesGetError:
    def map(self, status_code: int, content: bytes) -> GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayInfoLanguages401Error1](content)
            case 402:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_play_app_languages_play_info_languages_get_error_mapper: Final[
    ErrorMapper[GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody]
] = _GetPlayAppLanguagesPlayInfoLanguagesGetError()
