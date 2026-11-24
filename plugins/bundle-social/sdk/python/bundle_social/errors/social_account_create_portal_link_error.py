from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_social_account_create_portal_link400_error1 import ApiV1SocialAccountCreatePortalLink400Error1
from ..models.api_v1_social_account_create_portal_link401_error1 import ApiV1SocialAccountCreatePortalLink401Error1
from ..models.api_v1_social_account_create_portal_link403_error1 import ApiV1SocialAccountCreatePortalLink403Error1
from ..models.api_v1_social_account_create_portal_link404_error1 import ApiV1SocialAccountCreatePortalLink404Error1
from ..models.api_v1_social_account_create_portal_link429_error1 import ApiV1SocialAccountCreatePortalLink429Error1
from ..models.api_v1_social_account_create_portal_link500_error1 import ApiV1SocialAccountCreatePortalLink500Error1
from ..models.api_v1_social_account_create_portal_link502_error1 import ApiV1SocialAccountCreatePortalLink502Error1
from ..models.api_v1_social_account_create_portal_link503_error1 import ApiV1SocialAccountCreatePortalLink503Error1
from ..models.api_v1_social_account_create_portal_link504_error1 import ApiV1SocialAccountCreatePortalLink504Error1

SocialAccountCreatePortalLinkErrorBody: TypeAlias = (
    ApiV1SocialAccountCreatePortalLink400Error1
    | ApiV1SocialAccountCreatePortalLink401Error1
    | ApiV1SocialAccountCreatePortalLink403Error1
    | ApiV1SocialAccountCreatePortalLink404Error1
    | ApiV1SocialAccountCreatePortalLink429Error1
    | ApiV1SocialAccountCreatePortalLink500Error1
    | ApiV1SocialAccountCreatePortalLink502Error1
    | ApiV1SocialAccountCreatePortalLink503Error1
    | ApiV1SocialAccountCreatePortalLink504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SocialAccountCreatePortalLinkError:
    def map(self, status_code: int, content: bytes) -> SocialAccountCreatePortalLinkErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1SocialAccountCreatePortalLink400Error1](content)
            case 401:
                return decode_json[ApiV1SocialAccountCreatePortalLink401Error1](content)
            case 403:
                return decode_json[ApiV1SocialAccountCreatePortalLink403Error1](content)
            case 404:
                return decode_json[ApiV1SocialAccountCreatePortalLink404Error1](content)
            case 429:
                return decode_json[ApiV1SocialAccountCreatePortalLink429Error1](content)
            case 500:
                return decode_json[ApiV1SocialAccountCreatePortalLink500Error1](content)
            case 502:
                return decode_json[ApiV1SocialAccountCreatePortalLink502Error1](content)
            case 503:
                return decode_json[ApiV1SocialAccountCreatePortalLink503Error1](content)
            case 504:
                return decode_json[ApiV1SocialAccountCreatePortalLink504Error1](content)
            case _:
                return RawError(status_code, content)


social_account_create_portal_link_error_mapper: Final[
    ErrorMapper[SocialAccountCreatePortalLinkErrorBody]
] = _SocialAccountCreatePortalLinkError()
