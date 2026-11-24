from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_unset_channel400_error1 import ApiV1SocialAccountUnsetChannel400Error1
from ..models.api_v1_social_account_unset_channel401_error1 import ApiV1SocialAccountUnsetChannel401Error1
from ..models.api_v1_social_account_unset_channel403_error1 import ApiV1SocialAccountUnsetChannel403Error1
from ..models.api_v1_social_account_unset_channel404_error1 import ApiV1SocialAccountUnsetChannel404Error1
from ..models.api_v1_social_account_unset_channel429_error1 import ApiV1SocialAccountUnsetChannel429Error1
from ..models.api_v1_social_account_unset_channel500_error1 import ApiV1SocialAccountUnsetChannel500Error1
from ..models.api_v1_social_account_unset_channel502_error1 import ApiV1SocialAccountUnsetChannel502Error1
from ..models.api_v1_social_account_unset_channel503_error1 import ApiV1SocialAccountUnsetChannel503Error1
from ..models.api_v1_social_account_unset_channel504_error1 import ApiV1SocialAccountUnsetChannel504Error1

SocialAccountUnsetChannelErrorBody: TypeAlias = (
    ApiV1SocialAccountUnsetChannel400Error1
    | ApiV1SocialAccountUnsetChannel401Error1
    | ApiV1SocialAccountUnsetChannel403Error1
    | ApiV1SocialAccountUnsetChannel404Error1
    | ApiV1SocialAccountUnsetChannel429Error1
    | ApiV1SocialAccountUnsetChannel500Error1
    | ApiV1SocialAccountUnsetChannel502Error1
    | ApiV1SocialAccountUnsetChannel503Error1
    | ApiV1SocialAccountUnsetChannel504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountUnsetChannelError:
    def map(self, status_code: int, content: bytes) -> SocialAccountUnsetChannelErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountUnsetChannel400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountUnsetChannel401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountUnsetChannel403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountUnsetChannel404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountUnsetChannel429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountUnsetChannel500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountUnsetChannel502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountUnsetChannel503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountUnsetChannel504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_unset_channel_error_mapper: Final[
    ErrorMapper[SocialAccountUnsetChannelErrorBody]
] = _SocialAccountUnsetChannelError()
