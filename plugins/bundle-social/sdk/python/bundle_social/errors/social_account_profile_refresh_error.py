from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_profile_refresh400_error1 import ApiV1SocialAccountProfileRefresh400Error1
from ..models.api_v1_social_account_profile_refresh401_error1 import ApiV1SocialAccountProfileRefresh401Error1
from ..models.api_v1_social_account_profile_refresh403_error1 import ApiV1SocialAccountProfileRefresh403Error1
from ..models.api_v1_social_account_profile_refresh404_error1 import ApiV1SocialAccountProfileRefresh404Error1
from ..models.api_v1_social_account_profile_refresh429_error1 import ApiV1SocialAccountProfileRefresh429Error1
from ..models.api_v1_social_account_profile_refresh500_error1 import ApiV1SocialAccountProfileRefresh500Error1
from ..models.api_v1_social_account_profile_refresh502_error1 import ApiV1SocialAccountProfileRefresh502Error1
from ..models.api_v1_social_account_profile_refresh503_error1 import ApiV1SocialAccountProfileRefresh503Error1
from ..models.api_v1_social_account_profile_refresh504_error1 import ApiV1SocialAccountProfileRefresh504Error1

SocialAccountProfileRefreshErrorBody: TypeAlias = (
    ApiV1SocialAccountProfileRefresh400Error1
    | ApiV1SocialAccountProfileRefresh401Error1
    | ApiV1SocialAccountProfileRefresh403Error1
    | ApiV1SocialAccountProfileRefresh404Error1
    | ApiV1SocialAccountProfileRefresh429Error1
    | ApiV1SocialAccountProfileRefresh500Error1
    | ApiV1SocialAccountProfileRefresh502Error1
    | ApiV1SocialAccountProfileRefresh503Error1
    | ApiV1SocialAccountProfileRefresh504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountProfileRefreshError:
    def map(self, status_code: int, content: bytes) -> SocialAccountProfileRefreshErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountProfileRefresh400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountProfileRefresh401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountProfileRefresh403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountProfileRefresh404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountProfileRefresh429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountProfileRefresh500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountProfileRefresh502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountProfileRefresh503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountProfileRefresh504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_profile_refresh_error_mapper: Final[
    ErrorMapper[SocialAccountProfileRefreshErrorBody]
] = _SocialAccountProfileRefreshError()
