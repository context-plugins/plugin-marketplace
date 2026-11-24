from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_regions400_error1 import ApiV1MiscYoutubeRegions400Error1
from ..models.api_v1_misc_youtube_regions401_error1 import ApiV1MiscYoutubeRegions401Error1
from ..models.api_v1_misc_youtube_regions403_error1 import ApiV1MiscYoutubeRegions403Error1
from ..models.api_v1_misc_youtube_regions404_error1 import ApiV1MiscYoutubeRegions404Error1
from ..models.api_v1_misc_youtube_regions429_error1 import ApiV1MiscYoutubeRegions429Error1
from ..models.api_v1_misc_youtube_regions500_error1 import ApiV1MiscYoutubeRegions500Error1
from ..models.api_v1_misc_youtube_regions502_error1 import ApiV1MiscYoutubeRegions502Error1
from ..models.api_v1_misc_youtube_regions503_error1 import ApiV1MiscYoutubeRegions503Error1
from ..models.api_v1_misc_youtube_regions504_error1 import ApiV1MiscYoutubeRegions504Error1

MiscYoutubeGetRegionsErrorBody: TypeAlias = (
    ApiV1MiscYoutubeRegions400Error1
    | ApiV1MiscYoutubeRegions401Error1
    | ApiV1MiscYoutubeRegions403Error1
    | ApiV1MiscYoutubeRegions404Error1
    | ApiV1MiscYoutubeRegions429Error1
    | ApiV1MiscYoutubeRegions500Error1
    | ApiV1MiscYoutubeRegions502Error1
    | ApiV1MiscYoutubeRegions503Error1
    | ApiV1MiscYoutubeRegions504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeGetRegionsError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeGetRegionsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubeRegions400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubeRegions401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubeRegions403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubeRegions404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubeRegions429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubeRegions500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubeRegions502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubeRegions503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubeRegions504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_get_regions_error_mapper: Final[
    ErrorMapper[MiscYoutubeGetRegionsErrorBody]
] = _MiscYoutubeGetRegionsError()
