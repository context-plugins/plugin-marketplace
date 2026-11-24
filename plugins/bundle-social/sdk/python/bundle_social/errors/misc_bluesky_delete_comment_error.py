from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_bluesky_comment400_error1 import ApiV1MiscBlueskyComment400Error1
from ..models.api_v1_misc_bluesky_comment401_error1 import ApiV1MiscBlueskyComment401Error1
from ..models.api_v1_misc_bluesky_comment403_error1 import ApiV1MiscBlueskyComment403Error1
from ..models.api_v1_misc_bluesky_comment404_error1 import ApiV1MiscBlueskyComment404Error1
from ..models.api_v1_misc_bluesky_comment429_error1 import ApiV1MiscBlueskyComment429Error1
from ..models.api_v1_misc_bluesky_comment500_error1 import ApiV1MiscBlueskyComment500Error1
from ..models.api_v1_misc_bluesky_comment502_error1 import ApiV1MiscBlueskyComment502Error1
from ..models.api_v1_misc_bluesky_comment503_error1 import ApiV1MiscBlueskyComment503Error1
from ..models.api_v1_misc_bluesky_comment504_error1 import ApiV1MiscBlueskyComment504Error1

MiscBlueskyDeleteCommentErrorBody: TypeAlias = (
    ApiV1MiscBlueskyComment400Error1
    | ApiV1MiscBlueskyComment401Error1
    | ApiV1MiscBlueskyComment403Error1
    | ApiV1MiscBlueskyComment404Error1
    | ApiV1MiscBlueskyComment429Error1
    | ApiV1MiscBlueskyComment500Error1
    | ApiV1MiscBlueskyComment502Error1
    | ApiV1MiscBlueskyComment503Error1
    | ApiV1MiscBlueskyComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscBlueskyDeleteCommentError:
    def map(self, status_code: int, content: bytes) -> MiscBlueskyDeleteCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscBlueskyComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscBlueskyComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscBlueskyComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscBlueskyComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscBlueskyComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscBlueskyComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscBlueskyComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscBlueskyComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscBlueskyComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_bluesky_delete_comment_error_mapper: Final[
    ErrorMapper[MiscBlueskyDeleteCommentErrorBody]
] = _MiscBlueskyDeleteCommentError()
