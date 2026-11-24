from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_post400_error1 import ApiV1MiscGoogleBusinessPost400Error1
from ..models.api_v1_misc_google_business_post401_error1 import ApiV1MiscGoogleBusinessPost401Error1
from ..models.api_v1_misc_google_business_post403_error1 import ApiV1MiscGoogleBusinessPost403Error1
from ..models.api_v1_misc_google_business_post404_error1 import ApiV1MiscGoogleBusinessPost404Error1
from ..models.api_v1_misc_google_business_post429_error1 import ApiV1MiscGoogleBusinessPost429Error1
from ..models.api_v1_misc_google_business_post500_error1 import ApiV1MiscGoogleBusinessPost500Error1
from ..models.api_v1_misc_google_business_post502_error1 import ApiV1MiscGoogleBusinessPost502Error1
from ..models.api_v1_misc_google_business_post503_error1 import ApiV1MiscGoogleBusinessPost503Error1
from ..models.api_v1_misc_google_business_post504_error1 import ApiV1MiscGoogleBusinessPost504Error1

MiscGoogleBusinessDeletePostErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessPost400Error1
    | ApiV1MiscGoogleBusinessPost401Error1
    | ApiV1MiscGoogleBusinessPost403Error1
    | ApiV1MiscGoogleBusinessPost404Error1
    | ApiV1MiscGoogleBusinessPost429Error1
    | ApiV1MiscGoogleBusinessPost500Error1
    | ApiV1MiscGoogleBusinessPost502Error1
    | ApiV1MiscGoogleBusinessPost503Error1
    | ApiV1MiscGoogleBusinessPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessDeletePostError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessDeletePostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessPost400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessPost401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessPost403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessPost404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessPost429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessPost500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessPost502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessPost503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessPost504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_delete_post_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessDeletePostErrorBody]
] = _MiscGoogleBusinessDeletePostError()
