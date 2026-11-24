from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_linkedin_post_reshare400_error1 import ApiV1MiscLinkedinPostReshare400Error1
from ..models.api_v1_misc_linkedin_post_reshare401_error1 import ApiV1MiscLinkedinPostReshare401Error1
from ..models.api_v1_misc_linkedin_post_reshare403_error1 import ApiV1MiscLinkedinPostReshare403Error1
from ..models.api_v1_misc_linkedin_post_reshare404_error1 import ApiV1MiscLinkedinPostReshare404Error1
from ..models.api_v1_misc_linkedin_post_reshare422_error1 import ApiV1MiscLinkedinPostReshare422Error1
from ..models.api_v1_misc_linkedin_post_reshare429_error1 import ApiV1MiscLinkedinPostReshare429Error1
from ..models.api_v1_misc_linkedin_post_reshare500_error1 import ApiV1MiscLinkedinPostReshare500Error1
from ..models.api_v1_misc_linkedin_post_reshare502_error1 import ApiV1MiscLinkedinPostReshare502Error1
from ..models.api_v1_misc_linkedin_post_reshare503_error1 import ApiV1MiscLinkedinPostReshare503Error1
from ..models.api_v1_misc_linkedin_post_reshare504_error1 import ApiV1MiscLinkedinPostReshare504Error1

MiscLinkedinResharePostErrorBody: TypeAlias = (
    ApiV1MiscLinkedinPostReshare400Error1
    | ApiV1MiscLinkedinPostReshare401Error1
    | ApiV1MiscLinkedinPostReshare403Error1
    | ApiV1MiscLinkedinPostReshare404Error1
    | ApiV1MiscLinkedinPostReshare422Error1
    | ApiV1MiscLinkedinPostReshare429Error1
    | ApiV1MiscLinkedinPostReshare500Error1
    | ApiV1MiscLinkedinPostReshare502Error1
    | ApiV1MiscLinkedinPostReshare503Error1
    | ApiV1MiscLinkedinPostReshare504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscLinkedinResharePostError:
    def map(self, status_code: int, content: bytes) -> MiscLinkedinResharePostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscLinkedinPostReshare400Error1](content)
            case 401:
                return decode_json[ApiV1MiscLinkedinPostReshare401Error1](content)
            case 403:
                return decode_json[ApiV1MiscLinkedinPostReshare403Error1](content)
            case 404:
                return decode_json[ApiV1MiscLinkedinPostReshare404Error1](content)
            case 422:
                return decode_json[ApiV1MiscLinkedinPostReshare422Error1](content)
            case 429:
                return decode_json[ApiV1MiscLinkedinPostReshare429Error1](content)
            case 500:
                return decode_json[ApiV1MiscLinkedinPostReshare500Error1](content)
            case 502:
                return decode_json[ApiV1MiscLinkedinPostReshare502Error1](content)
            case 503:
                return decode_json[ApiV1MiscLinkedinPostReshare503Error1](content)
            case 504:
                return decode_json[ApiV1MiscLinkedinPostReshare504Error1](content)
            case _:
                return RawError(status_code, content)


misc_linkedin_reshare_post_error_mapper: Final[
    ErrorMapper[MiscLinkedinResharePostErrorBody]
] = _MiscLinkedinResharePostError()
