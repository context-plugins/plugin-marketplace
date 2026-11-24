from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_reddit_post400_error1 import ApiV1MiscRedditPost400Error1
from ..models.api_v1_misc_reddit_post401_error1 import ApiV1MiscRedditPost401Error1
from ..models.api_v1_misc_reddit_post403_error1 import ApiV1MiscRedditPost403Error1
from ..models.api_v1_misc_reddit_post404_error1 import ApiV1MiscRedditPost404Error1
from ..models.api_v1_misc_reddit_post429_error1 import ApiV1MiscRedditPost429Error1
from ..models.api_v1_misc_reddit_post500_error1 import ApiV1MiscRedditPost500Error1
from ..models.api_v1_misc_reddit_post502_error1 import ApiV1MiscRedditPost502Error1
from ..models.api_v1_misc_reddit_post503_error1 import ApiV1MiscRedditPost503Error1
from ..models.api_v1_misc_reddit_post504_error1 import ApiV1MiscRedditPost504Error1

MiscRedditEditPostErrorBody: TypeAlias = (
    ApiV1MiscRedditPost400Error1
    | ApiV1MiscRedditPost401Error1
    | ApiV1MiscRedditPost403Error1
    | ApiV1MiscRedditPost404Error1
    | ApiV1MiscRedditPost429Error1
    | ApiV1MiscRedditPost500Error1
    | ApiV1MiscRedditPost502Error1
    | ApiV1MiscRedditPost503Error1
    | ApiV1MiscRedditPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscRedditEditPostError:
    def map(self, status_code: int, content: bytes) -> MiscRedditEditPostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscRedditPost400Error1](content)
            case 401:
                return decode_json[ApiV1MiscRedditPost401Error1](content)
            case 403:
                return decode_json[ApiV1MiscRedditPost403Error1](content)
            case 404:
                return decode_json[ApiV1MiscRedditPost404Error1](content)
            case 429:
                return decode_json[ApiV1MiscRedditPost429Error1](content)
            case 500:
                return decode_json[ApiV1MiscRedditPost500Error1](content)
            case 502:
                return decode_json[ApiV1MiscRedditPost502Error1](content)
            case 503:
                return decode_json[ApiV1MiscRedditPost503Error1](content)
            case 504:
                return decode_json[ApiV1MiscRedditPost504Error1](content)
            case _:
                return RawError(status_code, content)


misc_reddit_edit_post_error_mapper: Final[ErrorMapper[MiscRedditEditPostErrorBody]] = _MiscRedditEditPostError()
