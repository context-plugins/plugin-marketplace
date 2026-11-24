from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_comment400_error1 import ApiV1Comment400Error1
from ..models.api_v1_comment401_error1 import ApiV1Comment401Error1
from ..models.api_v1_comment403_error1 import ApiV1Comment403Error1
from ..models.api_v1_comment404_error1 import ApiV1Comment404Error1
from ..models.api_v1_comment429_error1 import ApiV1Comment429Error1
from ..models.api_v1_comment500_error1 import ApiV1Comment500Error1
from ..models.api_v1_comment502_error1 import ApiV1Comment502Error1
from ..models.api_v1_comment503_error1 import ApiV1Comment503Error1
from ..models.api_v1_comment504_error1 import ApiV1Comment504Error1

CommentGetErrorBody: TypeAlias = (
    ApiV1Comment400Error1
    | ApiV1Comment401Error1
    | ApiV1Comment403Error1
    | ApiV1Comment404Error1
    | ApiV1Comment429Error1
    | ApiV1Comment500Error1
    | ApiV1Comment502Error1
    | ApiV1Comment503Error1
    | ApiV1Comment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CommentGetError:
    def map(self, status_code: int, content: bytes) -> CommentGetErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Comment400Error1](content)
            case 401:
                return decode_json[ApiV1Comment401Error1](content)
            case 403:
                return decode_json[ApiV1Comment403Error1](content)
            case 404:
                return decode_json[ApiV1Comment404Error1](content)
            case 429:
                return decode_json[ApiV1Comment429Error1](content)
            case 500:
                return decode_json[ApiV1Comment500Error1](content)
            case 502:
                return decode_json[ApiV1Comment502Error1](content)
            case 503:
                return decode_json[ApiV1Comment503Error1](content)
            case 504:
                return decode_json[ApiV1Comment504Error1](content)
            case _:
                return RawError(status_code, content)


comment_get_error_mapper: Final[ErrorMapper[CommentGetErrorBody]] = _CommentGetError()
