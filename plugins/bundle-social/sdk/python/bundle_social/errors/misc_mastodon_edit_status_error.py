from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_mastodon_status400_error1 import ApiV1MiscMastodonStatus400Error1
from ..models.api_v1_misc_mastodon_status401_error1 import ApiV1MiscMastodonStatus401Error1
from ..models.api_v1_misc_mastodon_status403_error1 import ApiV1MiscMastodonStatus403Error1
from ..models.api_v1_misc_mastodon_status404_error1 import ApiV1MiscMastodonStatus404Error1
from ..models.api_v1_misc_mastodon_status429_error1 import ApiV1MiscMastodonStatus429Error1
from ..models.api_v1_misc_mastodon_status500_error1 import ApiV1MiscMastodonStatus500Error1
from ..models.api_v1_misc_mastodon_status502_error1 import ApiV1MiscMastodonStatus502Error1
from ..models.api_v1_misc_mastodon_status503_error1 import ApiV1MiscMastodonStatus503Error1
from ..models.api_v1_misc_mastodon_status504_error1 import ApiV1MiscMastodonStatus504Error1

MiscMastodonEditStatusErrorBody: TypeAlias = (
    ApiV1MiscMastodonStatus400Error1
    | ApiV1MiscMastodonStatus401Error1
    | ApiV1MiscMastodonStatus403Error1
    | ApiV1MiscMastodonStatus404Error1
    | ApiV1MiscMastodonStatus429Error1
    | ApiV1MiscMastodonStatus500Error1
    | ApiV1MiscMastodonStatus502Error1
    | ApiV1MiscMastodonStatus503Error1
    | ApiV1MiscMastodonStatus504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscMastodonEditStatusError:
    def map(self, status_code: int, content: bytes) -> MiscMastodonEditStatusErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscMastodonStatus400Error1](content)
            case 401:
                return decode_json[ApiV1MiscMastodonStatus401Error1](content)
            case 403:
                return decode_json[ApiV1MiscMastodonStatus403Error1](content)
            case 404:
                return decode_json[ApiV1MiscMastodonStatus404Error1](content)
            case 429:
                return decode_json[ApiV1MiscMastodonStatus429Error1](content)
            case 500:
                return decode_json[ApiV1MiscMastodonStatus500Error1](content)
            case 502:
                return decode_json[ApiV1MiscMastodonStatus502Error1](content)
            case 503:
                return decode_json[ApiV1MiscMastodonStatus503Error1](content)
            case 504:
                return decode_json[ApiV1MiscMastodonStatus504Error1](content)
            case _:
                return RawError(status_code, content)


misc_mastodon_edit_status_error_mapper: Final[
    ErrorMapper[MiscMastodonEditStatusErrorBody]
] = _MiscMastodonEditStatusError()
