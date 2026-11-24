from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_video400_error1 import ApiV1MiscYoutubeVideo400Error1
from ..models.api_v1_misc_youtube_video401_error1 import ApiV1MiscYoutubeVideo401Error1
from ..models.api_v1_misc_youtube_video403_error1 import ApiV1MiscYoutubeVideo403Error1
from ..models.api_v1_misc_youtube_video404_error1 import ApiV1MiscYoutubeVideo404Error1
from ..models.api_v1_misc_youtube_video429_error1 import ApiV1MiscYoutubeVideo429Error1
from ..models.api_v1_misc_youtube_video500_error1 import ApiV1MiscYoutubeVideo500Error1
from ..models.api_v1_misc_youtube_video502_error1 import ApiV1MiscYoutubeVideo502Error1
from ..models.api_v1_misc_youtube_video503_error1 import ApiV1MiscYoutubeVideo503Error1
from ..models.api_v1_misc_youtube_video504_error1 import ApiV1MiscYoutubeVideo504Error1

MiscYoutubeEditVideoErrorBody: TypeAlias = (
    ApiV1MiscYoutubeVideo400Error1
    | ApiV1MiscYoutubeVideo401Error1
    | ApiV1MiscYoutubeVideo403Error1
    | ApiV1MiscYoutubeVideo404Error1
    | ApiV1MiscYoutubeVideo429Error1
    | ApiV1MiscYoutubeVideo500Error1
    | ApiV1MiscYoutubeVideo502Error1
    | ApiV1MiscYoutubeVideo503Error1
    | ApiV1MiscYoutubeVideo504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeEditVideoError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeEditVideoErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubeVideo400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubeVideo401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubeVideo403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubeVideo404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubeVideo429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubeVideo500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubeVideo502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubeVideo503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubeVideo504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_edit_video_error_mapper: Final[ErrorMapper[MiscYoutubeEditVideoErrorBody]] = _MiscYoutubeEditVideoError()
