from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_comment_retry400_error1 import ApiV1CommentRetry400Error1
from ..models.api_v1_comment_retry401_error1 import ApiV1CommentRetry401Error1
from ..models.api_v1_comment_retry403_error1 import ApiV1CommentRetry403Error1
from ..models.api_v1_comment_retry404_error1 import ApiV1CommentRetry404Error1
from ..models.api_v1_comment_retry429_error1 import ApiV1CommentRetry429Error1
from ..models.api_v1_comment_retry500_error1 import ApiV1CommentRetry500Error1
from ..models.api_v1_comment_retry502_error1 import ApiV1CommentRetry502Error1
from ..models.api_v1_comment_retry503_error1 import ApiV1CommentRetry503Error1
from ..models.api_v1_comment_retry504_error1 import ApiV1CommentRetry504Error1

CommentRetryErrorBody: TypeAlias = (
    ApiV1CommentRetry400Error1
    | ApiV1CommentRetry401Error1
    | ApiV1CommentRetry403Error1
    | ApiV1CommentRetry404Error1
    | ApiV1CommentRetry429Error1
    | ApiV1CommentRetry500Error1
    | ApiV1CommentRetry502Error1
    | ApiV1CommentRetry503Error1
    | ApiV1CommentRetry504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CommentRetryError:
    def map(self, status_code: int, content: bytes) -> CommentRetryErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1CommentRetry400Error1](content)
            case 401:
                return decode_json[ApiV1CommentRetry401Error1](content)
            case 403:
                return decode_json[ApiV1CommentRetry403Error1](content)
            case 404:
                return decode_json[ApiV1CommentRetry404Error1](content)
            case 429:
                return decode_json[ApiV1CommentRetry429Error1](content)
            case 500:
                return decode_json[ApiV1CommentRetry500Error1](content)
            case 502:
                return decode_json[ApiV1CommentRetry502Error1](content)
            case 503:
                return decode_json[ApiV1CommentRetry503Error1](content)
            case 504:
                return decode_json[ApiV1CommentRetry504Error1](content)
            case _:
                return RawError(status_code, content)


comment_retry_error_mapper: Final[ErrorMapper[CommentRetryErrorBody]] = _CommentRetryError()
