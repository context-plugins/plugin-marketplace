from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_reddit_subreddit_flairs400_error1 import ApiV1MiscRedditSubredditFlairs400Error1
from ..models.api_v1_misc_reddit_subreddit_flairs401_error1 import ApiV1MiscRedditSubredditFlairs401Error1
from ..models.api_v1_misc_reddit_subreddit_flairs403_error1 import ApiV1MiscRedditSubredditFlairs403Error1
from ..models.api_v1_misc_reddit_subreddit_flairs404_error1 import ApiV1MiscRedditSubredditFlairs404Error1
from ..models.api_v1_misc_reddit_subreddit_flairs429_error1 import ApiV1MiscRedditSubredditFlairs429Error1
from ..models.api_v1_misc_reddit_subreddit_flairs500_error1 import ApiV1MiscRedditSubredditFlairs500Error1
from ..models.api_v1_misc_reddit_subreddit_flairs502_error1 import ApiV1MiscRedditSubredditFlairs502Error1
from ..models.api_v1_misc_reddit_subreddit_flairs503_error1 import ApiV1MiscRedditSubredditFlairs503Error1
from ..models.api_v1_misc_reddit_subreddit_flairs504_error1 import ApiV1MiscRedditSubredditFlairs504Error1

MiscRedditGetSubredditFlairsErrorBody: TypeAlias = (
    ApiV1MiscRedditSubredditFlairs400Error1
    | ApiV1MiscRedditSubredditFlairs401Error1
    | ApiV1MiscRedditSubredditFlairs403Error1
    | ApiV1MiscRedditSubredditFlairs404Error1
    | ApiV1MiscRedditSubredditFlairs429Error1
    | ApiV1MiscRedditSubredditFlairs500Error1
    | ApiV1MiscRedditSubredditFlairs502Error1
    | ApiV1MiscRedditSubredditFlairs503Error1
    | ApiV1MiscRedditSubredditFlairs504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscRedditGetSubredditFlairsError:
    def map(self, status_code: int, content: bytes) -> MiscRedditGetSubredditFlairsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscRedditSubredditFlairs400Error1](content)
            case 401:
                return decode_json[ApiV1MiscRedditSubredditFlairs401Error1](content)
            case 403:
                return decode_json[ApiV1MiscRedditSubredditFlairs403Error1](content)
            case 404:
                return decode_json[ApiV1MiscRedditSubredditFlairs404Error1](content)
            case 429:
                return decode_json[ApiV1MiscRedditSubredditFlairs429Error1](content)
            case 500:
                return decode_json[ApiV1MiscRedditSubredditFlairs500Error1](content)
            case 502:
                return decode_json[ApiV1MiscRedditSubredditFlairs502Error1](content)
            case 503:
                return decode_json[ApiV1MiscRedditSubredditFlairs503Error1](content)
            case 504:
                return decode_json[ApiV1MiscRedditSubredditFlairs504Error1](content)
            case _:
                return RawError(status_code, content)


misc_reddit_get_subreddit_flairs_error_mapper: Final[
    ErrorMapper[MiscRedditGetSubredditFlairsErrorBody]
] = _MiscRedditGetSubredditFlairsError()
