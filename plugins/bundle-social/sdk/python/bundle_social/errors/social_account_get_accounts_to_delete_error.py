from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_to_delete400_error1 import ApiV1SocialAccountToDelete400Error1
from ..models.api_v1_social_account_to_delete401_error1 import ApiV1SocialAccountToDelete401Error1
from ..models.api_v1_social_account_to_delete403_error1 import ApiV1SocialAccountToDelete403Error1
from ..models.api_v1_social_account_to_delete404_error1 import ApiV1SocialAccountToDelete404Error1
from ..models.api_v1_social_account_to_delete429_error1 import ApiV1SocialAccountToDelete429Error1
from ..models.api_v1_social_account_to_delete500_error1 import ApiV1SocialAccountToDelete500Error1
from ..models.api_v1_social_account_to_delete502_error1 import ApiV1SocialAccountToDelete502Error1
from ..models.api_v1_social_account_to_delete503_error1 import ApiV1SocialAccountToDelete503Error1
from ..models.api_v1_social_account_to_delete504_error1 import ApiV1SocialAccountToDelete504Error1

SocialAccountGetAccountsToDeleteErrorBody: TypeAlias = (
    ApiV1SocialAccountToDelete400Error1
    | ApiV1SocialAccountToDelete401Error1
    | ApiV1SocialAccountToDelete403Error1
    | ApiV1SocialAccountToDelete404Error1
    | ApiV1SocialAccountToDelete429Error1
    | ApiV1SocialAccountToDelete500Error1
    | ApiV1SocialAccountToDelete502Error1
    | ApiV1SocialAccountToDelete503Error1
    | ApiV1SocialAccountToDelete504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountGetAccountsToDeleteError:
    def map(self, status_code: int, content: bytes) -> SocialAccountGetAccountsToDeleteErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountToDelete400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountToDelete401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountToDelete403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountToDelete404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountToDelete429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountToDelete500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountToDelete502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountToDelete503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountToDelete504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_get_accounts_to_delete_error_mapper: Final[
    ErrorMapper[SocialAccountGetAccountsToDeleteErrorBody]
] = _SocialAccountGetAccountsToDeleteError()
