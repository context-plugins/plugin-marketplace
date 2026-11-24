from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_linkedin_comment400_error1 import ApiV1MiscLinkedinComment400Error1
from ..models.api_v1_misc_linkedin_comment401_error1 import ApiV1MiscLinkedinComment401Error1
from ..models.api_v1_misc_linkedin_comment403_error1 import ApiV1MiscLinkedinComment403Error1
from ..models.api_v1_misc_linkedin_comment404_error1 import ApiV1MiscLinkedinComment404Error1
from ..models.api_v1_misc_linkedin_comment429_error1 import ApiV1MiscLinkedinComment429Error1
from ..models.api_v1_misc_linkedin_comment500_error1 import ApiV1MiscLinkedinComment500Error1
from ..models.api_v1_misc_linkedin_comment502_error1 import ApiV1MiscLinkedinComment502Error1
from ..models.api_v1_misc_linkedin_comment503_error1 import ApiV1MiscLinkedinComment503Error1
from ..models.api_v1_misc_linkedin_comment504_error1 import ApiV1MiscLinkedinComment504Error1

MiscLinkedinEditCommentErrorBody: TypeAlias = (
    ApiV1MiscLinkedinComment400Error1
    | ApiV1MiscLinkedinComment401Error1
    | ApiV1MiscLinkedinComment403Error1
    | ApiV1MiscLinkedinComment404Error1
    | ApiV1MiscLinkedinComment429Error1
    | ApiV1MiscLinkedinComment500Error1
    | ApiV1MiscLinkedinComment502Error1
    | ApiV1MiscLinkedinComment503Error1
    | ApiV1MiscLinkedinComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscLinkedinEditCommentError:
    def map(self, status_code: int, content: bytes) -> MiscLinkedinEditCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscLinkedinComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscLinkedinComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscLinkedinComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscLinkedinComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscLinkedinComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscLinkedinComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscLinkedinComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscLinkedinComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscLinkedinComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_linkedin_edit_comment_error_mapper: Final[
    ErrorMapper[MiscLinkedinEditCommentErrorBody]
] = _MiscLinkedinEditCommentError()
