from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_linkedin_post400_error1 import ApiV1MiscLinkedinPost400Error1
from ..models.api_v1_misc_linkedin_post401_error1 import ApiV1MiscLinkedinPost401Error1
from ..models.api_v1_misc_linkedin_post403_error1 import ApiV1MiscLinkedinPost403Error1
from ..models.api_v1_misc_linkedin_post404_error1 import ApiV1MiscLinkedinPost404Error1
from ..models.api_v1_misc_linkedin_post429_error1 import ApiV1MiscLinkedinPost429Error1
from ..models.api_v1_misc_linkedin_post500_error1 import ApiV1MiscLinkedinPost500Error1
from ..models.api_v1_misc_linkedin_post502_error1 import ApiV1MiscLinkedinPost502Error1
from ..models.api_v1_misc_linkedin_post503_error1 import ApiV1MiscLinkedinPost503Error1
from ..models.api_v1_misc_linkedin_post504_error1 import ApiV1MiscLinkedinPost504Error1

MiscLinkedinDeletePostErrorBody: TypeAlias = (
    ApiV1MiscLinkedinPost400Error1
    | ApiV1MiscLinkedinPost401Error1
    | ApiV1MiscLinkedinPost403Error1
    | ApiV1MiscLinkedinPost404Error1
    | ApiV1MiscLinkedinPost429Error1
    | ApiV1MiscLinkedinPost500Error1
    | ApiV1MiscLinkedinPost502Error1
    | ApiV1MiscLinkedinPost503Error1
    | ApiV1MiscLinkedinPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscLinkedinDeletePostError:
    def map(self, status_code: int, content: bytes) -> MiscLinkedinDeletePostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscLinkedinPost400Error1](content)
            case 401:
                return decode_json[ApiV1MiscLinkedinPost401Error1](content)
            case 403:
                return decode_json[ApiV1MiscLinkedinPost403Error1](content)
            case 404:
                return decode_json[ApiV1MiscLinkedinPost404Error1](content)
            case 429:
                return decode_json[ApiV1MiscLinkedinPost429Error1](content)
            case 500:
                return decode_json[ApiV1MiscLinkedinPost500Error1](content)
            case 502:
                return decode_json[ApiV1MiscLinkedinPost502Error1](content)
            case 503:
                return decode_json[ApiV1MiscLinkedinPost503Error1](content)
            case 504:
                return decode_json[ApiV1MiscLinkedinPost504Error1](content)
            case _:
                return RawError(status_code, content)


misc_linkedin_delete_post_error_mapper: Final[
    ErrorMapper[MiscLinkedinDeletePostErrorBody]
] = _MiscLinkedinDeletePostError()
