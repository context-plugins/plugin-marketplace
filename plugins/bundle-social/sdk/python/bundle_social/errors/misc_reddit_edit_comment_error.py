from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_reddit_comment400_error1 import ApiV1MiscRedditComment400Error1
from ..models.api_v1_misc_reddit_comment401_error1 import ApiV1MiscRedditComment401Error1
from ..models.api_v1_misc_reddit_comment403_error1 import ApiV1MiscRedditComment403Error1
from ..models.api_v1_misc_reddit_comment404_error1 import ApiV1MiscRedditComment404Error1
from ..models.api_v1_misc_reddit_comment429_error1 import ApiV1MiscRedditComment429Error1
from ..models.api_v1_misc_reddit_comment500_error1 import ApiV1MiscRedditComment500Error1
from ..models.api_v1_misc_reddit_comment502_error1 import ApiV1MiscRedditComment502Error1
from ..models.api_v1_misc_reddit_comment503_error1 import ApiV1MiscRedditComment503Error1
from ..models.api_v1_misc_reddit_comment504_error1 import ApiV1MiscRedditComment504Error1

MiscRedditEditCommentErrorBody: TypeAlias = (
    ApiV1MiscRedditComment400Error1
    | ApiV1MiscRedditComment401Error1
    | ApiV1MiscRedditComment403Error1
    | ApiV1MiscRedditComment404Error1
    | ApiV1MiscRedditComment429Error1
    | ApiV1MiscRedditComment500Error1
    | ApiV1MiscRedditComment502Error1
    | ApiV1MiscRedditComment503Error1
    | ApiV1MiscRedditComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscRedditEditCommentError:
    def map(self, status_code: int, content: bytes) -> MiscRedditEditCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscRedditComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscRedditComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscRedditComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscRedditComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscRedditComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscRedditComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscRedditComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscRedditComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscRedditComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_reddit_edit_comment_error_mapper: Final[
    ErrorMapper[MiscRedditEditCommentErrorBody]
] = _MiscRedditEditCommentError()
