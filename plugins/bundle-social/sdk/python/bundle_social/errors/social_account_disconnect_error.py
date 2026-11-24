from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_disconnect400_error1 import ApiV1SocialAccountDisconnect400Error1
from ..models.api_v1_social_account_disconnect401_error1 import ApiV1SocialAccountDisconnect401Error1
from ..models.api_v1_social_account_disconnect403_error1 import ApiV1SocialAccountDisconnect403Error1
from ..models.api_v1_social_account_disconnect404_error1 import ApiV1SocialAccountDisconnect404Error1
from ..models.api_v1_social_account_disconnect429_error1 import ApiV1SocialAccountDisconnect429Error1
from ..models.api_v1_social_account_disconnect500_error1 import ApiV1SocialAccountDisconnect500Error1
from ..models.api_v1_social_account_disconnect502_error1 import ApiV1SocialAccountDisconnect502Error1
from ..models.api_v1_social_account_disconnect503_error1 import ApiV1SocialAccountDisconnect503Error1
from ..models.api_v1_social_account_disconnect504_error1 import ApiV1SocialAccountDisconnect504Error1

SocialAccountDisconnectErrorBody: TypeAlias = (
    ApiV1SocialAccountDisconnect400Error1
    | ApiV1SocialAccountDisconnect401Error1
    | ApiV1SocialAccountDisconnect403Error1
    | ApiV1SocialAccountDisconnect404Error1
    | ApiV1SocialAccountDisconnect429Error1
    | ApiV1SocialAccountDisconnect500Error1
    | ApiV1SocialAccountDisconnect502Error1
    | ApiV1SocialAccountDisconnect503Error1
    | ApiV1SocialAccountDisconnect504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountDisconnectError:
    def map(self, status_code: int, content: bytes) -> SocialAccountDisconnectErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountDisconnect400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountDisconnect401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountDisconnect403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountDisconnect404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountDisconnect429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountDisconnect500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountDisconnect502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountDisconnect503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountDisconnect504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_disconnect_error_mapper: Final[
    ErrorMapper[SocialAccountDisconnectErrorBody]
] = _SocialAccountDisconnectError()
