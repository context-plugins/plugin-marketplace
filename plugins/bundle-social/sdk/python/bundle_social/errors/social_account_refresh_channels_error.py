from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_refresh_channels400_error1 import ApiV1SocialAccountRefreshChannels400Error1
from ..models.api_v1_social_account_refresh_channels401_error1 import ApiV1SocialAccountRefreshChannels401Error1
from ..models.api_v1_social_account_refresh_channels403_error1 import ApiV1SocialAccountRefreshChannels403Error1
from ..models.api_v1_social_account_refresh_channels404_error1 import ApiV1SocialAccountRefreshChannels404Error1
from ..models.api_v1_social_account_refresh_channels429_error1 import ApiV1SocialAccountRefreshChannels429Error1
from ..models.api_v1_social_account_refresh_channels500_error1 import ApiV1SocialAccountRefreshChannels500Error1
from ..models.api_v1_social_account_refresh_channels502_error1 import ApiV1SocialAccountRefreshChannels502Error1
from ..models.api_v1_social_account_refresh_channels503_error1 import ApiV1SocialAccountRefreshChannels503Error1
from ..models.api_v1_social_account_refresh_channels504_error1 import ApiV1SocialAccountRefreshChannels504Error1

SocialAccountRefreshChannelsErrorBody: TypeAlias = (
    ApiV1SocialAccountRefreshChannels400Error1
    | ApiV1SocialAccountRefreshChannels401Error1
    | ApiV1SocialAccountRefreshChannels403Error1
    | ApiV1SocialAccountRefreshChannels404Error1
    | ApiV1SocialAccountRefreshChannels429Error1
    | ApiV1SocialAccountRefreshChannels500Error1
    | ApiV1SocialAccountRefreshChannels502Error1
    | ApiV1SocialAccountRefreshChannels503Error1
    | ApiV1SocialAccountRefreshChannels504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountRefreshChannelsError:
    def map(self, status_code: int, content: bytes) -> SocialAccountRefreshChannelsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountRefreshChannels400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountRefreshChannels401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountRefreshChannels403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountRefreshChannels404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountRefreshChannels429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountRefreshChannels500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountRefreshChannels502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountRefreshChannels503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountRefreshChannels504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_refresh_channels_error_mapper: Final[
    ErrorMapper[SocialAccountRefreshChannelsErrorBody]
] = _SocialAccountRefreshChannelsError()
