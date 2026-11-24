from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_token_debug400_error1 import ApiV1MiscFacebookTokenDebug400Error1
from ..models.api_v1_misc_facebook_token_debug401_error1 import ApiV1MiscFacebookTokenDebug401Error1
from ..models.api_v1_misc_facebook_token_debug403_error1 import ApiV1MiscFacebookTokenDebug403Error1
from ..models.api_v1_misc_facebook_token_debug404_error1 import ApiV1MiscFacebookTokenDebug404Error1
from ..models.api_v1_misc_facebook_token_debug429_error1 import ApiV1MiscFacebookTokenDebug429Error1
from ..models.api_v1_misc_facebook_token_debug500_error1 import ApiV1MiscFacebookTokenDebug500Error1
from ..models.api_v1_misc_facebook_token_debug502_error1 import ApiV1MiscFacebookTokenDebug502Error1
from ..models.api_v1_misc_facebook_token_debug503_error1 import ApiV1MiscFacebookTokenDebug503Error1
from ..models.api_v1_misc_facebook_token_debug504_error1 import ApiV1MiscFacebookTokenDebug504Error1

MiscFacebookGetTokenDebugErrorBody: TypeAlias = (
    ApiV1MiscFacebookTokenDebug400Error1
    | ApiV1MiscFacebookTokenDebug401Error1
    | ApiV1MiscFacebookTokenDebug403Error1
    | ApiV1MiscFacebookTokenDebug404Error1
    | ApiV1MiscFacebookTokenDebug429Error1
    | ApiV1MiscFacebookTokenDebug500Error1
    | ApiV1MiscFacebookTokenDebug502Error1
    | ApiV1MiscFacebookTokenDebug503Error1
    | ApiV1MiscFacebookTokenDebug504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookGetTokenDebugError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookGetTokenDebugErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookTokenDebug400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookTokenDebug401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookTokenDebug403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookTokenDebug404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookTokenDebug429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookTokenDebug500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookTokenDebug502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookTokenDebug503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookTokenDebug504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_get_token_debug_error_mapper: Final[
    ErrorMapper[MiscFacebookGetTokenDebugErrorBody]
] = _MiscFacebookGetTokenDebugError()
