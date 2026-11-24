from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_tiktok_comment400_error1 import ApiV1MiscTiktokComment400Error1
from ..models.api_v1_misc_tiktok_comment401_error1 import ApiV1MiscTiktokComment401Error1
from ..models.api_v1_misc_tiktok_comment403_error1 import ApiV1MiscTiktokComment403Error1
from ..models.api_v1_misc_tiktok_comment404_error1 import ApiV1MiscTiktokComment404Error1
from ..models.api_v1_misc_tiktok_comment429_error1 import ApiV1MiscTiktokComment429Error1
from ..models.api_v1_misc_tiktok_comment500_error1 import ApiV1MiscTiktokComment500Error1
from ..models.api_v1_misc_tiktok_comment502_error1 import ApiV1MiscTiktokComment502Error1
from ..models.api_v1_misc_tiktok_comment503_error1 import ApiV1MiscTiktokComment503Error1
from ..models.api_v1_misc_tiktok_comment504_error1 import ApiV1MiscTiktokComment504Error1

MiscTiktokDeleteCommentErrorBody: TypeAlias = (
    ApiV1MiscTiktokComment400Error1
    | ApiV1MiscTiktokComment401Error1
    | ApiV1MiscTiktokComment403Error1
    | ApiV1MiscTiktokComment404Error1
    | ApiV1MiscTiktokComment429Error1
    | ApiV1MiscTiktokComment500Error1
    | ApiV1MiscTiktokComment502Error1
    | ApiV1MiscTiktokComment503Error1
    | ApiV1MiscTiktokComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTiktokDeleteCommentError:
    def map(self, status_code: int, content: bytes) -> MiscTiktokDeleteCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTiktokComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTiktokComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTiktokComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTiktokComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTiktokComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTiktokComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTiktokComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTiktokComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTiktokComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_tiktok_delete_comment_error_mapper: Final[
    ErrorMapper[MiscTiktokDeleteCommentErrorBody]
] = _MiscTiktokDeleteCommentError()
