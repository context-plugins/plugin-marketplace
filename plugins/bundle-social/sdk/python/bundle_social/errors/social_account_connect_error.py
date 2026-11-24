from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_connect400_error1 import ApiV1SocialAccountConnect400Error1
from ..models.api_v1_social_account_connect401_error1 import ApiV1SocialAccountConnect401Error1
from ..models.api_v1_social_account_connect403_error1 import ApiV1SocialAccountConnect403Error1
from ..models.api_v1_social_account_connect404_error1 import ApiV1SocialAccountConnect404Error1
from ..models.api_v1_social_account_connect429_error1 import ApiV1SocialAccountConnect429Error1
from ..models.api_v1_social_account_connect500_error1 import ApiV1SocialAccountConnect500Error1
from ..models.api_v1_social_account_connect502_error1 import ApiV1SocialAccountConnect502Error1
from ..models.api_v1_social_account_connect503_error1 import ApiV1SocialAccountConnect503Error1
from ..models.api_v1_social_account_connect504_error1 import ApiV1SocialAccountConnect504Error1

SocialAccountConnectErrorBody: TypeAlias = (
    ApiV1SocialAccountConnect400Error1
    | ApiV1SocialAccountConnect401Error1
    | ApiV1SocialAccountConnect403Error1
    | ApiV1SocialAccountConnect404Error1
    | ApiV1SocialAccountConnect429Error1
    | ApiV1SocialAccountConnect500Error1
    | ApiV1SocialAccountConnect502Error1
    | ApiV1SocialAccountConnect503Error1
    | ApiV1SocialAccountConnect504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountConnectError:
    def map(self, status_code: int, content: bytes) -> SocialAccountConnectErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountConnect400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountConnect401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountConnect403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountConnect404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountConnect429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountConnect500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountConnect502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountConnect503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountConnect504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_connect_error_mapper: Final[ErrorMapper[SocialAccountConnectErrorBody]] = _SocialAccountConnectError()
