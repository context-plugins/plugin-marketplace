from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_copy400_error1 import ApiV1SocialAccountCopy400Error1
from ..models.api_v1_social_account_copy401_error1 import ApiV1SocialAccountCopy401Error1
from ..models.api_v1_social_account_copy403_error1 import ApiV1SocialAccountCopy403Error1
from ..models.api_v1_social_account_copy404_error1 import ApiV1SocialAccountCopy404Error1
from ..models.api_v1_social_account_copy429_error1 import ApiV1SocialAccountCopy429Error1
from ..models.api_v1_social_account_copy500_error1 import ApiV1SocialAccountCopy500Error1
from ..models.api_v1_social_account_copy502_error1 import ApiV1SocialAccountCopy502Error1
from ..models.api_v1_social_account_copy503_error1 import ApiV1SocialAccountCopy503Error1
from ..models.api_v1_social_account_copy504_error1 import ApiV1SocialAccountCopy504Error1

SocialAccountCopyErrorBody: TypeAlias = (
    ApiV1SocialAccountCopy400Error1
    | ApiV1SocialAccountCopy401Error1
    | ApiV1SocialAccountCopy403Error1
    | ApiV1SocialAccountCopy404Error1
    | ApiV1SocialAccountCopy429Error1
    | ApiV1SocialAccountCopy500Error1
    | ApiV1SocialAccountCopy502Error1
    | ApiV1SocialAccountCopy503Error1
    | ApiV1SocialAccountCopy504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountCopyError:
    def map(self, status_code: int, content: bytes) -> SocialAccountCopyErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountCopy400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountCopy401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountCopy403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountCopy404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountCopy429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountCopy500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountCopy502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountCopy503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountCopy504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_copy_error_mapper: Final[ErrorMapper[SocialAccountCopyErrorBody]] = _SocialAccountCopyError()
