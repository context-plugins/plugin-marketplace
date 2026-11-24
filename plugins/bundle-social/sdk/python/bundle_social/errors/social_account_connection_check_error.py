from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_connection_check400_error1 import ApiV1SocialAccountConnectionCheck400Error1
from ..models.api_v1_social_account_connection_check401_error1 import ApiV1SocialAccountConnectionCheck401Error1
from ..models.api_v1_social_account_connection_check403_error1 import ApiV1SocialAccountConnectionCheck403Error1
from ..models.api_v1_social_account_connection_check404_error1 import ApiV1SocialAccountConnectionCheck404Error1
from ..models.api_v1_social_account_connection_check429_error1 import ApiV1SocialAccountConnectionCheck429Error1
from ..models.api_v1_social_account_connection_check500_error1 import ApiV1SocialAccountConnectionCheck500Error1
from ..models.api_v1_social_account_connection_check502_error1 import ApiV1SocialAccountConnectionCheck502Error1
from ..models.api_v1_social_account_connection_check503_error1 import ApiV1SocialAccountConnectionCheck503Error1
from ..models.api_v1_social_account_connection_check504_error1 import ApiV1SocialAccountConnectionCheck504Error1

SocialAccountConnectionCheckErrorBody: TypeAlias = (
    ApiV1SocialAccountConnectionCheck400Error1
    | ApiV1SocialAccountConnectionCheck401Error1
    | ApiV1SocialAccountConnectionCheck403Error1
    | ApiV1SocialAccountConnectionCheck404Error1
    | ApiV1SocialAccountConnectionCheck429Error1
    | ApiV1SocialAccountConnectionCheck500Error1
    | ApiV1SocialAccountConnectionCheck502Error1
    | ApiV1SocialAccountConnectionCheck503Error1
    | ApiV1SocialAccountConnectionCheck504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountConnectionCheckError:
    def map(self, status_code: int, content: bytes) -> SocialAccountConnectionCheckErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountConnectionCheck400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountConnectionCheck401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountConnectionCheck403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountConnectionCheck404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountConnectionCheck429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountConnectionCheck500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountConnectionCheck502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountConnectionCheck503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountConnectionCheck504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_connection_check_error_mapper: Final[
    ErrorMapper[SocialAccountConnectionCheckErrorBody]
] = _SocialAccountConnectionCheckError()
