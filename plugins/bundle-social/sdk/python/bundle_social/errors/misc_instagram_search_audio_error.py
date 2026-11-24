from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_instagram_audio400_error1 import ApiV1MiscInstagramAudio400Error1
from ..models.api_v1_misc_instagram_audio401_error1 import ApiV1MiscInstagramAudio401Error1
from ..models.api_v1_misc_instagram_audio403_error1 import ApiV1MiscInstagramAudio403Error1
from ..models.api_v1_misc_instagram_audio404_error1 import ApiV1MiscInstagramAudio404Error1
from ..models.api_v1_misc_instagram_audio429_error1 import ApiV1MiscInstagramAudio429Error1
from ..models.api_v1_misc_instagram_audio500_error1 import ApiV1MiscInstagramAudio500Error1
from ..models.api_v1_misc_instagram_audio502_error1 import ApiV1MiscInstagramAudio502Error1
from ..models.api_v1_misc_instagram_audio503_error1 import ApiV1MiscInstagramAudio503Error1
from ..models.api_v1_misc_instagram_audio504_error1 import ApiV1MiscInstagramAudio504Error1

MiscInstagramSearchAudioErrorBody: TypeAlias = (
    ApiV1MiscInstagramAudio400Error1
    | ApiV1MiscInstagramAudio401Error1
    | ApiV1MiscInstagramAudio403Error1
    | ApiV1MiscInstagramAudio404Error1
    | ApiV1MiscInstagramAudio429Error1
    | ApiV1MiscInstagramAudio500Error1
    | ApiV1MiscInstagramAudio502Error1
    | ApiV1MiscInstagramAudio503Error1
    | ApiV1MiscInstagramAudio504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscInstagramSearchAudioError:
    def map(self, status_code: int, content: bytes) -> MiscInstagramSearchAudioErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscInstagramAudio400Error1](content)
            case 401:
                return decode_json[ApiV1MiscInstagramAudio401Error1](content)
            case 403:
                return decode_json[ApiV1MiscInstagramAudio403Error1](content)
            case 404:
                return decode_json[ApiV1MiscInstagramAudio404Error1](content)
            case 429:
                return decode_json[ApiV1MiscInstagramAudio429Error1](content)
            case 500:
                return decode_json[ApiV1MiscInstagramAudio500Error1](content)
            case 502:
                return decode_json[ApiV1MiscInstagramAudio502Error1](content)
            case 503:
                return decode_json[ApiV1MiscInstagramAudio503Error1](content)
            case 504:
                return decode_json[ApiV1MiscInstagramAudio504Error1](content)
            case _:
                return RawError(status_code, content)


misc_instagram_search_audio_error_mapper: Final[
    ErrorMapper[MiscInstagramSearchAudioErrorBody]
] = _MiscInstagramSearchAudioError()
