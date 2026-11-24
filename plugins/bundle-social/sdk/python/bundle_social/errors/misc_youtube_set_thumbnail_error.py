from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_thumbnail400_error1 import ApiV1MiscYoutubeThumbnail400Error1
from ..models.api_v1_misc_youtube_thumbnail401_error1 import ApiV1MiscYoutubeThumbnail401Error1
from ..models.api_v1_misc_youtube_thumbnail403_error1 import ApiV1MiscYoutubeThumbnail403Error1
from ..models.api_v1_misc_youtube_thumbnail404_error1 import ApiV1MiscYoutubeThumbnail404Error1
from ..models.api_v1_misc_youtube_thumbnail429_error1 import ApiV1MiscYoutubeThumbnail429Error1
from ..models.api_v1_misc_youtube_thumbnail500_error1 import ApiV1MiscYoutubeThumbnail500Error1
from ..models.api_v1_misc_youtube_thumbnail502_error1 import ApiV1MiscYoutubeThumbnail502Error1
from ..models.api_v1_misc_youtube_thumbnail503_error1 import ApiV1MiscYoutubeThumbnail503Error1
from ..models.api_v1_misc_youtube_thumbnail504_error1 import ApiV1MiscYoutubeThumbnail504Error1

MiscYoutubeSetThumbnailErrorBody: TypeAlias = (
    ApiV1MiscYoutubeThumbnail400Error1
    | ApiV1MiscYoutubeThumbnail401Error1
    | ApiV1MiscYoutubeThumbnail403Error1
    | ApiV1MiscYoutubeThumbnail404Error1
    | ApiV1MiscYoutubeThumbnail429Error1
    | ApiV1MiscYoutubeThumbnail500Error1
    | ApiV1MiscYoutubeThumbnail502Error1
    | ApiV1MiscYoutubeThumbnail503Error1
    | ApiV1MiscYoutubeThumbnail504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeSetThumbnailError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeSetThumbnailErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubeThumbnail400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubeThumbnail401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubeThumbnail403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubeThumbnail404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubeThumbnail429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubeThumbnail500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubeThumbnail502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubeThumbnail503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubeThumbnail504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_set_thumbnail_error_mapper: Final[
    ErrorMapper[MiscYoutubeSetThumbnailErrorBody]
] = _MiscYoutubeSetThumbnailError()
