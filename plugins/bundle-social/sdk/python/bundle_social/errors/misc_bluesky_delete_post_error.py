from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_bluesky_post400_error1 import ApiV1MiscBlueskyPost400Error1
from ..models.api_v1_misc_bluesky_post401_error1 import ApiV1MiscBlueskyPost401Error1
from ..models.api_v1_misc_bluesky_post403_error1 import ApiV1MiscBlueskyPost403Error1
from ..models.api_v1_misc_bluesky_post404_error1 import ApiV1MiscBlueskyPost404Error1
from ..models.api_v1_misc_bluesky_post429_error1 import ApiV1MiscBlueskyPost429Error1
from ..models.api_v1_misc_bluesky_post500_error1 import ApiV1MiscBlueskyPost500Error1
from ..models.api_v1_misc_bluesky_post502_error1 import ApiV1MiscBlueskyPost502Error1
from ..models.api_v1_misc_bluesky_post503_error1 import ApiV1MiscBlueskyPost503Error1
from ..models.api_v1_misc_bluesky_post504_error1 import ApiV1MiscBlueskyPost504Error1

MiscBlueskyDeletePostErrorBody: TypeAlias = (
    ApiV1MiscBlueskyPost400Error1
    | ApiV1MiscBlueskyPost401Error1
    | ApiV1MiscBlueskyPost403Error1
    | ApiV1MiscBlueskyPost404Error1
    | ApiV1MiscBlueskyPost429Error1
    | ApiV1MiscBlueskyPost500Error1
    | ApiV1MiscBlueskyPost502Error1
    | ApiV1MiscBlueskyPost503Error1
    | ApiV1MiscBlueskyPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscBlueskyDeletePostError:
    def map(self, status_code: int, content: bytes) -> MiscBlueskyDeletePostErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscBlueskyPost400Error1](content)
            case 401:
                return decode_json[ApiV1MiscBlueskyPost401Error1](content)
            case 403:
                return decode_json[ApiV1MiscBlueskyPost403Error1](content)
            case 404:
                return decode_json[ApiV1MiscBlueskyPost404Error1](content)
            case 429:
                return decode_json[ApiV1MiscBlueskyPost429Error1](content)
            case 500:
                return decode_json[ApiV1MiscBlueskyPost500Error1](content)
            case 502:
                return decode_json[ApiV1MiscBlueskyPost502Error1](content)
            case 503:
                return decode_json[ApiV1MiscBlueskyPost503Error1](content)
            case 504:
                return decode_json[ApiV1MiscBlueskyPost504Error1](content)
            case _:
                return RawError(status_code, content)


misc_bluesky_delete_post_error_mapper: Final[
    ErrorMapper[MiscBlueskyDeletePostErrorBody]
] = _MiscBlueskyDeletePostError()
