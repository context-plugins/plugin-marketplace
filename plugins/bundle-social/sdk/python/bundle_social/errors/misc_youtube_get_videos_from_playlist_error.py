from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_playlist_items400_error1 import ApiV1MiscYoutubePlaylistItems400Error1
from ..models.api_v1_misc_youtube_playlist_items401_error1 import ApiV1MiscYoutubePlaylistItems401Error1
from ..models.api_v1_misc_youtube_playlist_items403_error1 import ApiV1MiscYoutubePlaylistItems403Error1
from ..models.api_v1_misc_youtube_playlist_items404_error1 import ApiV1MiscYoutubePlaylistItems404Error1
from ..models.api_v1_misc_youtube_playlist_items429_error1 import ApiV1MiscYoutubePlaylistItems429Error1
from ..models.api_v1_misc_youtube_playlist_items500_error1 import ApiV1MiscYoutubePlaylistItems500Error1
from ..models.api_v1_misc_youtube_playlist_items502_error1 import ApiV1MiscYoutubePlaylistItems502Error1
from ..models.api_v1_misc_youtube_playlist_items503_error1 import ApiV1MiscYoutubePlaylistItems503Error1
from ..models.api_v1_misc_youtube_playlist_items504_error1 import ApiV1MiscYoutubePlaylistItems504Error1

MiscYoutubeGetVideosFromPlaylistErrorBody: TypeAlias = (
    ApiV1MiscYoutubePlaylistItems400Error1
    | ApiV1MiscYoutubePlaylistItems401Error1
    | ApiV1MiscYoutubePlaylistItems403Error1
    | ApiV1MiscYoutubePlaylistItems404Error1
    | ApiV1MiscYoutubePlaylistItems429Error1
    | ApiV1MiscYoutubePlaylistItems500Error1
    | ApiV1MiscYoutubePlaylistItems502Error1
    | ApiV1MiscYoutubePlaylistItems503Error1
    | ApiV1MiscYoutubePlaylistItems504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeGetVideosFromPlaylistError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeGetVideosFromPlaylistErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubePlaylistItems400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubePlaylistItems401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubePlaylistItems403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubePlaylistItems404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubePlaylistItems429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubePlaylistItems500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubePlaylistItems502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubePlaylistItems503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubePlaylistItems504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_get_videos_from_playlist_error_mapper: Final[
    ErrorMapper[MiscYoutubeGetVideosFromPlaylistErrorBody]
] = _MiscYoutubeGetVideosFromPlaylistError()
