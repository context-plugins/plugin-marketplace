from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_comment400_error1 import ApiV1MiscFacebookComment400Error1
from ..models.api_v1_misc_facebook_comment401_error1 import ApiV1MiscFacebookComment401Error1
from ..models.api_v1_misc_facebook_comment403_error1 import ApiV1MiscFacebookComment403Error1
from ..models.api_v1_misc_facebook_comment404_error1 import ApiV1MiscFacebookComment404Error1
from ..models.api_v1_misc_facebook_comment429_error1 import ApiV1MiscFacebookComment429Error1
from ..models.api_v1_misc_facebook_comment500_error1 import ApiV1MiscFacebookComment500Error1
from ..models.api_v1_misc_facebook_comment502_error1 import ApiV1MiscFacebookComment502Error1
from ..models.api_v1_misc_facebook_comment503_error1 import ApiV1MiscFacebookComment503Error1
from ..models.api_v1_misc_facebook_comment504_error1 import ApiV1MiscFacebookComment504Error1

MiscFacebookDeleteCommentErrorBody: TypeAlias = (
    ApiV1MiscFacebookComment400Error1
    | ApiV1MiscFacebookComment401Error1
    | ApiV1MiscFacebookComment403Error1
    | ApiV1MiscFacebookComment404Error1
    | ApiV1MiscFacebookComment429Error1
    | ApiV1MiscFacebookComment500Error1
    | ApiV1MiscFacebookComment502Error1
    | ApiV1MiscFacebookComment503Error1
    | ApiV1MiscFacebookComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookDeleteCommentError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookDeleteCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_delete_comment_error_mapper: Final[
    ErrorMapper[MiscFacebookDeleteCommentErrorBody]
] = _MiscFacebookDeleteCommentError()
