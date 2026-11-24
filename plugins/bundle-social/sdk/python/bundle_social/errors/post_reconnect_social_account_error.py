from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_reconnect_social_account400_error1 import ApiV1PostReconnectSocialAccount400Error1
from ..models.api_v1_post_reconnect_social_account401_error1 import ApiV1PostReconnectSocialAccount401Error1
from ..models.api_v1_post_reconnect_social_account403_error1 import ApiV1PostReconnectSocialAccount403Error1
from ..models.api_v1_post_reconnect_social_account404_error1 import ApiV1PostReconnectSocialAccount404Error1
from ..models.api_v1_post_reconnect_social_account429_error1 import ApiV1PostReconnectSocialAccount429Error1
from ..models.api_v1_post_reconnect_social_account500_error1 import ApiV1PostReconnectSocialAccount500Error1
from ..models.api_v1_post_reconnect_social_account502_error1 import ApiV1PostReconnectSocialAccount502Error1
from ..models.api_v1_post_reconnect_social_account503_error1 import ApiV1PostReconnectSocialAccount503Error1
from ..models.api_v1_post_reconnect_social_account504_error1 import ApiV1PostReconnectSocialAccount504Error1

PostReconnectSocialAccountErrorBody: TypeAlias = (
    ApiV1PostReconnectSocialAccount400Error1
    | ApiV1PostReconnectSocialAccount401Error1
    | ApiV1PostReconnectSocialAccount403Error1
    | ApiV1PostReconnectSocialAccount404Error1
    | ApiV1PostReconnectSocialAccount429Error1
    | ApiV1PostReconnectSocialAccount500Error1
    | ApiV1PostReconnectSocialAccount502Error1
    | ApiV1PostReconnectSocialAccount503Error1
    | ApiV1PostReconnectSocialAccount504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostReconnectSocialAccountError:
    def map(self, status_code: int, content: bytes) -> PostReconnectSocialAccountErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostReconnectSocialAccount400Error1](content)
            case 401:
                return decode_json[ApiV1PostReconnectSocialAccount401Error1](content)
            case 403:
                return decode_json[ApiV1PostReconnectSocialAccount403Error1](content)
            case 404:
                return decode_json[ApiV1PostReconnectSocialAccount404Error1](content)
            case 429:
                return decode_json[ApiV1PostReconnectSocialAccount429Error1](content)
            case 500:
                return decode_json[ApiV1PostReconnectSocialAccount500Error1](content)
            case 502:
                return decode_json[ApiV1PostReconnectSocialAccount502Error1](content)
            case 503:
                return decode_json[ApiV1PostReconnectSocialAccount503Error1](content)
            case 504:
                return decode_json[ApiV1PostReconnectSocialAccount504Error1](content)
            case _:
                return RawError(status_code, content)


post_reconnect_social_account_error_mapper: Final[
    ErrorMapper[PostReconnectSocialAccountErrorBody]
] = _PostReconnectSocialAccountError()
