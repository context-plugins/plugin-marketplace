from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_set_channel400_error1 import ApiV1SocialAccountSetChannel400Error1
from ..models.api_v1_social_account_set_channel401_error1 import ApiV1SocialAccountSetChannel401Error1
from ..models.api_v1_social_account_set_channel403_error1 import ApiV1SocialAccountSetChannel403Error1
from ..models.api_v1_social_account_set_channel404_error1 import ApiV1SocialAccountSetChannel404Error1
from ..models.api_v1_social_account_set_channel429_error1 import ApiV1SocialAccountSetChannel429Error1
from ..models.api_v1_social_account_set_channel500_error1 import ApiV1SocialAccountSetChannel500Error1
from ..models.api_v1_social_account_set_channel502_error1 import ApiV1SocialAccountSetChannel502Error1
from ..models.api_v1_social_account_set_channel503_error1 import ApiV1SocialAccountSetChannel503Error1
from ..models.api_v1_social_account_set_channel504_error1 import ApiV1SocialAccountSetChannel504Error1

SocialAccountSetChannelErrorBody: TypeAlias = (
    ApiV1SocialAccountSetChannel400Error1
    | ApiV1SocialAccountSetChannel401Error1
    | ApiV1SocialAccountSetChannel403Error1
    | ApiV1SocialAccountSetChannel404Error1
    | ApiV1SocialAccountSetChannel429Error1
    | ApiV1SocialAccountSetChannel500Error1
    | ApiV1SocialAccountSetChannel502Error1
    | ApiV1SocialAccountSetChannel503Error1
    | ApiV1SocialAccountSetChannel504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountSetChannelError:
    def map(self, status_code: int, content: bytes) -> SocialAccountSetChannelErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountSetChannel400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountSetChannel401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountSetChannel403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountSetChannel404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountSetChannel429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountSetChannel500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountSetChannel502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountSetChannel503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountSetChannel504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_set_channel_error_mapper: Final[
    ErrorMapper[SocialAccountSetChannelErrorBody]
] = _SocialAccountSetChannelError()
