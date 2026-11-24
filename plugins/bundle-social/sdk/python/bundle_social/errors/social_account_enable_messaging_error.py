from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_messaging_enable400_error1 import ApiV1SocialAccountMessagingEnable400Error1
from ..models.api_v1_social_account_messaging_enable401_error1 import ApiV1SocialAccountMessagingEnable401Error1
from ..models.api_v1_social_account_messaging_enable403_error1 import ApiV1SocialAccountMessagingEnable403Error1
from ..models.api_v1_social_account_messaging_enable404_error1 import ApiV1SocialAccountMessagingEnable404Error1
from ..models.api_v1_social_account_messaging_enable429_error1 import ApiV1SocialAccountMessagingEnable429Error1
from ..models.api_v1_social_account_messaging_enable500_error1 import ApiV1SocialAccountMessagingEnable500Error1
from ..models.api_v1_social_account_messaging_enable502_error1 import ApiV1SocialAccountMessagingEnable502Error1
from ..models.api_v1_social_account_messaging_enable503_error1 import ApiV1SocialAccountMessagingEnable503Error1
from ..models.api_v1_social_account_messaging_enable504_error1 import ApiV1SocialAccountMessagingEnable504Error1

SocialAccountEnableMessagingErrorBody: TypeAlias = (
    ApiV1SocialAccountMessagingEnable400Error1
    | ApiV1SocialAccountMessagingEnable401Error1
    | ApiV1SocialAccountMessagingEnable403Error1
    | ApiV1SocialAccountMessagingEnable404Error1
    | ApiV1SocialAccountMessagingEnable429Error1
    | ApiV1SocialAccountMessagingEnable500Error1
    | ApiV1SocialAccountMessagingEnable502Error1
    | ApiV1SocialAccountMessagingEnable503Error1
    | ApiV1SocialAccountMessagingEnable504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountEnableMessagingError:
    def map(self, status_code: int, content: bytes) -> SocialAccountEnableMessagingErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountMessagingEnable400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountMessagingEnable401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountMessagingEnable403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountMessagingEnable404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountMessagingEnable429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountMessagingEnable500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountMessagingEnable502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountMessagingEnable503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountMessagingEnable504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_enable_messaging_error_mapper: Final[
    ErrorMapper[SocialAccountEnableMessagingErrorBody]
] = _SocialAccountEnableMessagingError()
