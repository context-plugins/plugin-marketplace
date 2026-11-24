from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_post400_error1 import ApiV1MiscFacebookPost400Error1
from ..models.api_v1_misc_facebook_post401_error1 import ApiV1MiscFacebookPost401Error1
from ..models.api_v1_misc_facebook_post403_error1 import ApiV1MiscFacebookPost403Error1
from ..models.api_v1_misc_facebook_post404_error1 import ApiV1MiscFacebookPost404Error1
from ..models.api_v1_misc_facebook_post429_error1 import ApiV1MiscFacebookPost429Error1
from ..models.api_v1_misc_facebook_post500_error1 import ApiV1MiscFacebookPost500Error1
from ..models.api_v1_misc_facebook_post502_error1 import ApiV1MiscFacebookPost502Error1
from ..models.api_v1_misc_facebook_post503_error1 import ApiV1MiscFacebookPost503Error1
from ..models.api_v1_misc_facebook_post504_error1 import ApiV1MiscFacebookPost504Error1

MiscFacebookDeletePostErrorBody: TypeAlias = (
    ApiV1MiscFacebookPost400Error1
    | ApiV1MiscFacebookPost401Error1
    | ApiV1MiscFacebookPost403Error1
    | ApiV1MiscFacebookPost404Error1
    | ApiV1MiscFacebookPost429Error1
    | ApiV1MiscFacebookPost500Error1
    | ApiV1MiscFacebookPost502Error1
    | ApiV1MiscFacebookPost503Error1
    | ApiV1MiscFacebookPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookDeletePostError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookDeletePostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookPost400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookPost401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookPost403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookPost404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookPost429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookPost500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookPost502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookPost503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookPost504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_delete_post_error_mapper: Final[
    ErrorMapper[MiscFacebookDeletePostErrorBody]
] = _MiscFacebookDeletePostError()
