from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_youtube_comment400_error1 import ApiV1MiscYoutubeComment400Error1
from ..models.api_v1_misc_youtube_comment401_error1 import ApiV1MiscYoutubeComment401Error1
from ..models.api_v1_misc_youtube_comment403_error1 import ApiV1MiscYoutubeComment403Error1
from ..models.api_v1_misc_youtube_comment404_error1 import ApiV1MiscYoutubeComment404Error1
from ..models.api_v1_misc_youtube_comment429_error1 import ApiV1MiscYoutubeComment429Error1
from ..models.api_v1_misc_youtube_comment500_error1 import ApiV1MiscYoutubeComment500Error1
from ..models.api_v1_misc_youtube_comment502_error1 import ApiV1MiscYoutubeComment502Error1
from ..models.api_v1_misc_youtube_comment503_error1 import ApiV1MiscYoutubeComment503Error1
from ..models.api_v1_misc_youtube_comment504_error1 import ApiV1MiscYoutubeComment504Error1

MiscYoutubeEditCommentErrorBody: TypeAlias = (
    ApiV1MiscYoutubeComment400Error1
    | ApiV1MiscYoutubeComment401Error1
    | ApiV1MiscYoutubeComment403Error1
    | ApiV1MiscYoutubeComment404Error1
    | ApiV1MiscYoutubeComment429Error1
    | ApiV1MiscYoutubeComment500Error1
    | ApiV1MiscYoutubeComment502Error1
    | ApiV1MiscYoutubeComment503Error1
    | ApiV1MiscYoutubeComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscYoutubeEditCommentError:
    def map(self, status_code: int, content: bytes) -> MiscYoutubeEditCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscYoutubeComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscYoutubeComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscYoutubeComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscYoutubeComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscYoutubeComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscYoutubeComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscYoutubeComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscYoutubeComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscYoutubeComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_youtube_edit_comment_error_mapper: Final[
    ErrorMapper[MiscYoutubeEditCommentErrorBody]
] = _MiscYoutubeEditCommentError()
