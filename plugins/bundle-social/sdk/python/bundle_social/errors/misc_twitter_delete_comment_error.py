from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_twitter_comment400_error1 import ApiV1MiscTwitterComment400Error1
from ..models.api_v1_misc_twitter_comment401_error1 import ApiV1MiscTwitterComment401Error1
from ..models.api_v1_misc_twitter_comment403_error1 import ApiV1MiscTwitterComment403Error1
from ..models.api_v1_misc_twitter_comment404_error1 import ApiV1MiscTwitterComment404Error1
from ..models.api_v1_misc_twitter_comment429_error1 import ApiV1MiscTwitterComment429Error1
from ..models.api_v1_misc_twitter_comment500_error1 import ApiV1MiscTwitterComment500Error1
from ..models.api_v1_misc_twitter_comment502_error1 import ApiV1MiscTwitterComment502Error1
from ..models.api_v1_misc_twitter_comment503_error1 import ApiV1MiscTwitterComment503Error1
from ..models.api_v1_misc_twitter_comment504_error1 import ApiV1MiscTwitterComment504Error1

MiscTwitterDeleteCommentErrorBody: TypeAlias = (
    ApiV1MiscTwitterComment400Error1
    | ApiV1MiscTwitterComment401Error1
    | ApiV1MiscTwitterComment403Error1
    | ApiV1MiscTwitterComment404Error1
    | ApiV1MiscTwitterComment429Error1
    | ApiV1MiscTwitterComment500Error1
    | ApiV1MiscTwitterComment502Error1
    | ApiV1MiscTwitterComment503Error1
    | ApiV1MiscTwitterComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTwitterDeleteCommentError:
    def map(self, status_code: int, content: bytes) -> MiscTwitterDeleteCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTwitterComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTwitterComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTwitterComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTwitterComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTwitterComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTwitterComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTwitterComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTwitterComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTwitterComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_twitter_delete_comment_error_mapper: Final[
    ErrorMapper[MiscTwitterDeleteCommentErrorBody]
] = _MiscTwitterDeleteCommentError()
