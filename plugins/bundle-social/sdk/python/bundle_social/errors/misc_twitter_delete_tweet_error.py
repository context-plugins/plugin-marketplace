from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_twitter_tweet400_error1 import ApiV1MiscTwitterTweet400Error1
from ..models.api_v1_misc_twitter_tweet401_error1 import ApiV1MiscTwitterTweet401Error1
from ..models.api_v1_misc_twitter_tweet403_error1 import ApiV1MiscTwitterTweet403Error1
from ..models.api_v1_misc_twitter_tweet404_error1 import ApiV1MiscTwitterTweet404Error1
from ..models.api_v1_misc_twitter_tweet429_error1 import ApiV1MiscTwitterTweet429Error1
from ..models.api_v1_misc_twitter_tweet500_error1 import ApiV1MiscTwitterTweet500Error1
from ..models.api_v1_misc_twitter_tweet502_error1 import ApiV1MiscTwitterTweet502Error1
from ..models.api_v1_misc_twitter_tweet503_error1 import ApiV1MiscTwitterTweet503Error1
from ..models.api_v1_misc_twitter_tweet504_error1 import ApiV1MiscTwitterTweet504Error1

MiscTwitterDeleteTweetErrorBody: TypeAlias = (
    ApiV1MiscTwitterTweet400Error1
    | ApiV1MiscTwitterTweet401Error1
    | ApiV1MiscTwitterTweet403Error1
    | ApiV1MiscTwitterTweet404Error1
    | ApiV1MiscTwitterTweet429Error1
    | ApiV1MiscTwitterTweet500Error1
    | ApiV1MiscTwitterTweet502Error1
    | ApiV1MiscTwitterTweet503Error1
    | ApiV1MiscTwitterTweet504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTwitterDeleteTweetError:
    def map(self, status_code: int, content: bytes) -> MiscTwitterDeleteTweetErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTwitterTweet400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTwitterTweet401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTwitterTweet403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTwitterTweet404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTwitterTweet429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTwitterTweet500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTwitterTweet502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTwitterTweet503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTwitterTweet504Error1](content)
            case _:
                return RawError(status_code, content)


misc_twitter_delete_tweet_error_mapper: Final[
    ErrorMapper[MiscTwitterDeleteTweetErrorBody]
] = _MiscTwitterDeleteTweetError()
