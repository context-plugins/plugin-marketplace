from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.ios_info_languages401_error1 import IosInfoLanguages401Error1

GetPlayAppLanguagesIosInfoLanguagesGetErrorBody: TypeAlias = IosInfoLanguages401Error1 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPlayAppLanguagesIosInfoLanguagesGetError:
    def map(self, status_code: int, content: bytes) -> GetPlayAppLanguagesIosInfoLanguagesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosInfoLanguages401Error1](content)
            case 402:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_play_app_languages_ios_info_languages_get_error_mapper: Final[
    ErrorMapper[GetPlayAppLanguagesIosInfoLanguagesGetErrorBody]
] = _GetPlayAppLanguagesIosInfoLanguagesGetError()
