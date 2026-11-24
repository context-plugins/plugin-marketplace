from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_tiktok_cml_trending_list400_error1 import ApiV1MiscTiktokCmlTrendingList400Error1
from ..models.api_v1_misc_tiktok_cml_trending_list401_error1 import ApiV1MiscTiktokCmlTrendingList401Error1
from ..models.api_v1_misc_tiktok_cml_trending_list403_error1 import ApiV1MiscTiktokCmlTrendingList403Error1
from ..models.api_v1_misc_tiktok_cml_trending_list404_error1 import ApiV1MiscTiktokCmlTrendingList404Error1
from ..models.api_v1_misc_tiktok_cml_trending_list429_error1 import ApiV1MiscTiktokCmlTrendingList429Error1
from ..models.api_v1_misc_tiktok_cml_trending_list500_error1 import ApiV1MiscTiktokCmlTrendingList500Error1
from ..models.api_v1_misc_tiktok_cml_trending_list502_error1 import ApiV1MiscTiktokCmlTrendingList502Error1
from ..models.api_v1_misc_tiktok_cml_trending_list503_error1 import ApiV1MiscTiktokCmlTrendingList503Error1
from ..models.api_v1_misc_tiktok_cml_trending_list504_error1 import ApiV1MiscTiktokCmlTrendingList504Error1

MiscTiktokGetCommercialMusicTrendingListErrorBody: TypeAlias = (
    ApiV1MiscTiktokCmlTrendingList400Error1
    | ApiV1MiscTiktokCmlTrendingList401Error1
    | ApiV1MiscTiktokCmlTrendingList403Error1
    | ApiV1MiscTiktokCmlTrendingList404Error1
    | ApiV1MiscTiktokCmlTrendingList429Error1
    | ApiV1MiscTiktokCmlTrendingList500Error1
    | ApiV1MiscTiktokCmlTrendingList502Error1
    | ApiV1MiscTiktokCmlTrendingList503Error1
    | ApiV1MiscTiktokCmlTrendingList504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTiktokGetCommercialMusicTrendingListError:
    def map(self, status_code: int, content: bytes) -> MiscTiktokGetCommercialMusicTrendingListErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTiktokCmlTrendingList400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTiktokCmlTrendingList401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTiktokCmlTrendingList403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTiktokCmlTrendingList404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTiktokCmlTrendingList429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTiktokCmlTrendingList500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTiktokCmlTrendingList502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTiktokCmlTrendingList503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTiktokCmlTrendingList504Error1](content)
            case _:
                return RawError(status_code, content)


misc_tiktok_get_commercial_music_trending_list_error_mapper: Final[
    ErrorMapper[MiscTiktokGetCommercialMusicTrendingListErrorBody]
] = _MiscTiktokGetCommercialMusicTrendingListError()
