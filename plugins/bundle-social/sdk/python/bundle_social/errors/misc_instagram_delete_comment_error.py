from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_instagram_comment400_error1 import ApiV1MiscInstagramComment400Error1
from ..models.api_v1_misc_instagram_comment401_error1 import ApiV1MiscInstagramComment401Error1
from ..models.api_v1_misc_instagram_comment403_error1 import ApiV1MiscInstagramComment403Error1
from ..models.api_v1_misc_instagram_comment404_error1 import ApiV1MiscInstagramComment404Error1
from ..models.api_v1_misc_instagram_comment429_error1 import ApiV1MiscInstagramComment429Error1
from ..models.api_v1_misc_instagram_comment500_error1 import ApiV1MiscInstagramComment500Error1
from ..models.api_v1_misc_instagram_comment502_error1 import ApiV1MiscInstagramComment502Error1
from ..models.api_v1_misc_instagram_comment503_error1 import ApiV1MiscInstagramComment503Error1
from ..models.api_v1_misc_instagram_comment504_error1 import ApiV1MiscInstagramComment504Error1

MiscInstagramDeleteCommentErrorBody: TypeAlias = (
    ApiV1MiscInstagramComment400Error1
    | ApiV1MiscInstagramComment401Error1
    | ApiV1MiscInstagramComment403Error1
    | ApiV1MiscInstagramComment404Error1
    | ApiV1MiscInstagramComment429Error1
    | ApiV1MiscInstagramComment500Error1
    | ApiV1MiscInstagramComment502Error1
    | ApiV1MiscInstagramComment503Error1
    | ApiV1MiscInstagramComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscInstagramDeleteCommentError:
    def map(self, status_code: int, content: bytes) -> MiscInstagramDeleteCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscInstagramComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscInstagramComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscInstagramComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscInstagramComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscInstagramComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscInstagramComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscInstagramComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscInstagramComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscInstagramComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_instagram_delete_comment_error_mapper: Final[
    ErrorMapper[MiscInstagramDeleteCommentErrorBody]
] = _MiscInstagramDeleteCommentError()
