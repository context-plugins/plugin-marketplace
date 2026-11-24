from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_by_type400_error1 import ApiV1SocialAccountByType400Error1
from ..models.api_v1_social_account_by_type401_error1 import ApiV1SocialAccountByType401Error1
from ..models.api_v1_social_account_by_type403_error1 import ApiV1SocialAccountByType403Error1
from ..models.api_v1_social_account_by_type404_error1 import ApiV1SocialAccountByType404Error1
from ..models.api_v1_social_account_by_type429_error1 import ApiV1SocialAccountByType429Error1
from ..models.api_v1_social_account_by_type500_error1 import ApiV1SocialAccountByType500Error1
from ..models.api_v1_social_account_by_type502_error1 import ApiV1SocialAccountByType502Error1
from ..models.api_v1_social_account_by_type503_error1 import ApiV1SocialAccountByType503Error1
from ..models.api_v1_social_account_by_type504_error1 import ApiV1SocialAccountByType504Error1

SocialAccountGetByTypeErrorBody: TypeAlias = (
    ApiV1SocialAccountByType400Error1
    | ApiV1SocialAccountByType401Error1
    | ApiV1SocialAccountByType403Error1
    | ApiV1SocialAccountByType404Error1
    | ApiV1SocialAccountByType429Error1
    | ApiV1SocialAccountByType500Error1
    | ApiV1SocialAccountByType502Error1
    | ApiV1SocialAccountByType503Error1
    | ApiV1SocialAccountByType504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountGetByTypeError:
    def map(self, status_code: int, content: bytes) -> SocialAccountGetByTypeErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountByType400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountByType401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountByType403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountByType404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountByType429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountByType500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountByType502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountByType503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountByType504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_get_by_type_error_mapper: Final[
    ErrorMapper[SocialAccountGetByTypeErrorBody]
] = _SocialAccountGetByTypeError()
