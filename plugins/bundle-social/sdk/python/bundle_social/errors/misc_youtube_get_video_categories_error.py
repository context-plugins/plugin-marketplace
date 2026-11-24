from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_video_categories400_error1 import ApiV1MiscYoutubeVideoCategories400Error1
from ..models.api_v1_misc_youtube_video_categories401_error1 import ApiV1MiscYoutubeVideoCategories401Error1
from ..models.api_v1_misc_youtube_video_categories403_error1 import ApiV1MiscYoutubeVideoCategories403Error1
from ..models.api_v1_misc_youtube_video_categories404_error1 import ApiV1MiscYoutubeVideoCategories404Error1
from ..models.api_v1_misc_youtube_video_categories429_error1 import ApiV1MiscYoutubeVideoCategories429Error1
from ..models.api_v1_misc_youtube_video_categories500_error1 import ApiV1MiscYoutubeVideoCategories500Error1
from ..models.api_v1_misc_youtube_video_categories502_error1 import ApiV1MiscYoutubeVideoCategories502Error1
from ..models.api_v1_misc_youtube_video_categories503_error1 import ApiV1MiscYoutubeVideoCategories503Error1
from ..models.api_v1_misc_youtube_video_categories504_error1 import ApiV1MiscYoutubeVideoCategories504Error1

MiscYoutubeGetVideoCategoriesErrorBody: TypeAlias = (
    ApiV1MiscYoutubeVideoCategories400Error1
    | ApiV1MiscYoutubeVideoCategories401Error1
    | ApiV1MiscYoutubeVideoCategories403Error1
    | ApiV1MiscYoutubeVideoCategories404Error1
    | ApiV1MiscYoutubeVideoCategories429Error1
    | ApiV1MiscYoutubeVideoCategories500Error1
    | ApiV1MiscYoutubeVideoCategories502Error1
    | ApiV1MiscYoutubeVideoCategories503Error1
    | ApiV1MiscYoutubeVideoCategories504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeGetVideoCategoriesError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeGetVideoCategoriesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubeVideoCategories400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubeVideoCategories401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubeVideoCategories403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubeVideoCategories404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubeVideoCategories429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubeVideoCategories500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubeVideoCategories502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubeVideoCategories503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubeVideoCategories504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_get_video_categories_error_mapper: Final[
    ErrorMapper[MiscYoutubeGetVideoCategoriesErrorBody]
] = _MiscYoutubeGetVideoCategoriesError()
