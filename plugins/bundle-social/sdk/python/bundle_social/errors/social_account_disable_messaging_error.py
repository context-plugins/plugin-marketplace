from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_messaging_disable400_error1 import ApiV1SocialAccountMessagingDisable400Error1
from ..models.api_v1_social_account_messaging_disable401_error1 import ApiV1SocialAccountMessagingDisable401Error1
from ..models.api_v1_social_account_messaging_disable403_error1 import ApiV1SocialAccountMessagingDisable403Error1
from ..models.api_v1_social_account_messaging_disable404_error1 import ApiV1SocialAccountMessagingDisable404Error1
from ..models.api_v1_social_account_messaging_disable429_error1 import ApiV1SocialAccountMessagingDisable429Error1
from ..models.api_v1_social_account_messaging_disable500_error1 import ApiV1SocialAccountMessagingDisable500Error1
from ..models.api_v1_social_account_messaging_disable502_error1 import ApiV1SocialAccountMessagingDisable502Error1
from ..models.api_v1_social_account_messaging_disable503_error1 import ApiV1SocialAccountMessagingDisable503Error1
from ..models.api_v1_social_account_messaging_disable504_error1 import ApiV1SocialAccountMessagingDisable504Error1

SocialAccountDisableMessagingErrorBody: TypeAlias = (
    ApiV1SocialAccountMessagingDisable400Error1
    | ApiV1SocialAccountMessagingDisable401Error1
    | ApiV1SocialAccountMessagingDisable403Error1
    | ApiV1SocialAccountMessagingDisable404Error1
    | ApiV1SocialAccountMessagingDisable429Error1
    | ApiV1SocialAccountMessagingDisable500Error1
    | ApiV1SocialAccountMessagingDisable502Error1
    | ApiV1SocialAccountMessagingDisable503Error1
    | ApiV1SocialAccountMessagingDisable504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountDisableMessagingError:
    def map(self, status_code: int, content: bytes) -> SocialAccountDisableMessagingErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountMessagingDisable400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountMessagingDisable401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountMessagingDisable403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountMessagingDisable404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountMessagingDisable429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountMessagingDisable500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountMessagingDisable502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountMessagingDisable503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountMessagingDisable504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_disable_messaging_error_mapper: Final[
    ErrorMapper[SocialAccountDisableMessagingErrorBody]
] = _SocialAccountDisableMessagingError()
