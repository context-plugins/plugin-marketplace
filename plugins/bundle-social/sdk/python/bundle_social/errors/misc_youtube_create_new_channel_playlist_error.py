from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_playlist400_error1 import ApiV1MiscYoutubePlaylist400Error1
from ..models.api_v1_misc_youtube_playlist401_error1 import ApiV1MiscYoutubePlaylist401Error1
from ..models.api_v1_misc_youtube_playlist403_error1 import ApiV1MiscYoutubePlaylist403Error1
from ..models.api_v1_misc_youtube_playlist404_error1 import ApiV1MiscYoutubePlaylist404Error1
from ..models.api_v1_misc_youtube_playlist429_error1 import ApiV1MiscYoutubePlaylist429Error1
from ..models.api_v1_misc_youtube_playlist500_error1 import ApiV1MiscYoutubePlaylist500Error1
from ..models.api_v1_misc_youtube_playlist502_error1 import ApiV1MiscYoutubePlaylist502Error1
from ..models.api_v1_misc_youtube_playlist503_error1 import ApiV1MiscYoutubePlaylist503Error1
from ..models.api_v1_misc_youtube_playlist504_error1 import ApiV1MiscYoutubePlaylist504Error1

MiscYoutubeCreateNewChannelPlaylistErrorBody: TypeAlias = (
    ApiV1MiscYoutubePlaylist400Error1
    | ApiV1MiscYoutubePlaylist401Error1
    | ApiV1MiscYoutubePlaylist403Error1
    | ApiV1MiscYoutubePlaylist404Error1
    | ApiV1MiscYoutubePlaylist429Error1
    | ApiV1MiscYoutubePlaylist500Error1
    | ApiV1MiscYoutubePlaylist502Error1
    | ApiV1MiscYoutubePlaylist503Error1
    | ApiV1MiscYoutubePlaylist504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeCreateNewChannelPlaylistError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeCreateNewChannelPlaylistErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubePlaylist400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubePlaylist401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubePlaylist403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubePlaylist404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubePlaylist429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubePlaylist500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubePlaylist502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubePlaylist503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubePlaylist504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_create_new_channel_playlist_error_mapper: Final[
    ErrorMapper[MiscYoutubeCreateNewChannelPlaylistErrorBody]
] = _MiscYoutubeCreateNewChannelPlaylistError()
