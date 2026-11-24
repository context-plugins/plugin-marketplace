from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_instagram_tags400_error1 import ApiV1MiscInstagramTags400Error1
from ..models.api_v1_misc_instagram_tags401_error1 import ApiV1MiscInstagramTags401Error1
from ..models.api_v1_misc_instagram_tags403_error1 import ApiV1MiscInstagramTags403Error1
from ..models.api_v1_misc_instagram_tags404_error1 import ApiV1MiscInstagramTags404Error1
from ..models.api_v1_misc_instagram_tags429_error1 import ApiV1MiscInstagramTags429Error1
from ..models.api_v1_misc_instagram_tags500_error1 import ApiV1MiscInstagramTags500Error1
from ..models.api_v1_misc_instagram_tags502_error1 import ApiV1MiscInstagramTags502Error1
from ..models.api_v1_misc_instagram_tags503_error1 import ApiV1MiscInstagramTags503Error1
from ..models.api_v1_misc_instagram_tags504_error1 import ApiV1MiscInstagramTags504Error1

MiscInstagramBusinessDiscoveryErrorBody: TypeAlias = (
    ApiV1MiscInstagramTags400Error1
    | ApiV1MiscInstagramTags401Error1
    | ApiV1MiscInstagramTags403Error1
    | ApiV1MiscInstagramTags404Error1
    | ApiV1MiscInstagramTags429Error1
    | ApiV1MiscInstagramTags500Error1
    | ApiV1MiscInstagramTags502Error1
    | ApiV1MiscInstagramTags503Error1
    | ApiV1MiscInstagramTags504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscInstagramBusinessDiscoveryError:
    def map(self, status_code: int, content: bytes) -> MiscInstagramBusinessDiscoveryErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscInstagramTags400Error1](content)
            case 401:
                return decode_json[ApiV1MiscInstagramTags401Error1](content)
            case 403:
                return decode_json[ApiV1MiscInstagramTags403Error1](content)
            case 404:
                return decode_json[ApiV1MiscInstagramTags404Error1](content)
            case 429:
                return decode_json[ApiV1MiscInstagramTags429Error1](content)
            case 500:
                return decode_json[ApiV1MiscInstagramTags500Error1](content)
            case 502:
                return decode_json[ApiV1MiscInstagramTags502Error1](content)
            case 503:
                return decode_json[ApiV1MiscInstagramTags503Error1](content)
            case 504:
                return decode_json[ApiV1MiscInstagramTags504Error1](content)
            case _:
                return RawError(status_code, content)


misc_instagram_business_discovery_error_mapper: Final[
    ErrorMapper[MiscInstagramBusinessDiscoveryErrorBody]
] = _MiscInstagramBusinessDiscoveryError()
