from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_twitter_retweet400_error1 import ApiV1MiscTwitterRetweet400Error1
from ..models.api_v1_misc_twitter_retweet401_error1 import ApiV1MiscTwitterRetweet401Error1
from ..models.api_v1_misc_twitter_retweet403_error1 import ApiV1MiscTwitterRetweet403Error1
from ..models.api_v1_misc_twitter_retweet404_error1 import ApiV1MiscTwitterRetweet404Error1
from ..models.api_v1_misc_twitter_retweet429_error1 import ApiV1MiscTwitterRetweet429Error1
from ..models.api_v1_misc_twitter_retweet500_error1 import ApiV1MiscTwitterRetweet500Error1
from ..models.api_v1_misc_twitter_retweet502_error1 import ApiV1MiscTwitterRetweet502Error1
from ..models.api_v1_misc_twitter_retweet503_error1 import ApiV1MiscTwitterRetweet503Error1
from ..models.api_v1_misc_twitter_retweet504_error1 import ApiV1MiscTwitterRetweet504Error1

MiscTwitterUnretweetErrorBody: TypeAlias = (
    ApiV1MiscTwitterRetweet400Error1
    | ApiV1MiscTwitterRetweet401Error1
    | ApiV1MiscTwitterRetweet403Error1
    | ApiV1MiscTwitterRetweet404Error1
    | ApiV1MiscTwitterRetweet429Error1
    | ApiV1MiscTwitterRetweet500Error1
    | ApiV1MiscTwitterRetweet502Error1
    | ApiV1MiscTwitterRetweet503Error1
    | ApiV1MiscTwitterRetweet504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTwitterUnretweetError:
    def map(self, status_code: int, content: bytes) -> MiscTwitterUnretweetErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTwitterRetweet400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTwitterRetweet401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTwitterRetweet403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTwitterRetweet404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTwitterRetweet429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTwitterRetweet500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTwitterRetweet502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTwitterRetweet503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTwitterRetweet504Error1](content)
            case _:
                return RawError(status_code, content)


misc_twitter_unretweet_error_mapper: Final[ErrorMapper[MiscTwitterUnretweetErrorBody]] = _MiscTwitterUnretweetError()
