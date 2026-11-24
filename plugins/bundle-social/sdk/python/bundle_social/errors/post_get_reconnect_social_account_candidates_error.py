from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_reconnect_social_account_candidates400_error1 import (
    ApiV1PostReconnectSocialAccountCandidates400Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates401_error1 import (
    ApiV1PostReconnectSocialAccountCandidates401Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates403_error1 import (
    ApiV1PostReconnectSocialAccountCandidates403Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates404_error1 import (
    ApiV1PostReconnectSocialAccountCandidates404Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates429_error1 import (
    ApiV1PostReconnectSocialAccountCandidates429Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates500_error1 import (
    ApiV1PostReconnectSocialAccountCandidates500Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates502_error1 import (
    ApiV1PostReconnectSocialAccountCandidates502Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates503_error1 import (
    ApiV1PostReconnectSocialAccountCandidates503Error1,
)
from ..models.api_v1_post_reconnect_social_account_candidates504_error1 import (
    ApiV1PostReconnectSocialAccountCandidates504Error1,
)

PostGetReconnectSocialAccountCandidatesErrorBody: TypeAlias = (
    ApiV1PostReconnectSocialAccountCandidates400Error1
    | ApiV1PostReconnectSocialAccountCandidates401Error1
    | ApiV1PostReconnectSocialAccountCandidates403Error1
    | ApiV1PostReconnectSocialAccountCandidates404Error1
    | ApiV1PostReconnectSocialAccountCandidates429Error1
    | ApiV1PostReconnectSocialAccountCandidates500Error1
    | ApiV1PostReconnectSocialAccountCandidates502Error1
    | ApiV1PostReconnectSocialAccountCandidates503Error1
    | ApiV1PostReconnectSocialAccountCandidates504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostGetReconnectSocialAccountCandidatesError:
    def map(self, status_code: int, content: bytes) -> PostGetReconnectSocialAccountCandidatesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates400Error1](content)
            case 401:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates401Error1](content)
            case 403:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates403Error1](content)
            case 404:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates404Error1](content)
            case 429:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates429Error1](content)
            case 500:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates500Error1](content)
            case 502:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates502Error1](content)
            case 503:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates503Error1](content)
            case 504:
                return decode_json[ApiV1PostReconnectSocialAccountCandidates504Error1](content)
            case _:
                return RawError(status_code, content)


post_get_reconnect_social_account_candidates_error_mapper: Final[
    ErrorMapper[PostGetReconnectSocialAccountCandidatesErrorBody]
] = _PostGetReconnectSocialAccountCandidatesError()
