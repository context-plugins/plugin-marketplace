from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_mastodon_comment400_error1 import ApiV1MiscMastodonComment400Error1
from ..models.api_v1_misc_mastodon_comment401_error1 import ApiV1MiscMastodonComment401Error1
from ..models.api_v1_misc_mastodon_comment403_error1 import ApiV1MiscMastodonComment403Error1
from ..models.api_v1_misc_mastodon_comment404_error1 import ApiV1MiscMastodonComment404Error1
from ..models.api_v1_misc_mastodon_comment429_error1 import ApiV1MiscMastodonComment429Error1
from ..models.api_v1_misc_mastodon_comment500_error1 import ApiV1MiscMastodonComment500Error1
from ..models.api_v1_misc_mastodon_comment502_error1 import ApiV1MiscMastodonComment502Error1
from ..models.api_v1_misc_mastodon_comment503_error1 import ApiV1MiscMastodonComment503Error1
from ..models.api_v1_misc_mastodon_comment504_error1 import ApiV1MiscMastodonComment504Error1

MiscMastodonEditCommentErrorBody: TypeAlias = (
    ApiV1MiscMastodonComment400Error1
    | ApiV1MiscMastodonComment401Error1
    | ApiV1MiscMastodonComment403Error1
    | ApiV1MiscMastodonComment404Error1
    | ApiV1MiscMastodonComment429Error1
    | ApiV1MiscMastodonComment500Error1
    | ApiV1MiscMastodonComment502Error1
    | ApiV1MiscMastodonComment503Error1
    | ApiV1MiscMastodonComment504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscMastodonEditCommentError:
    def map(self, status_code: int, content: bytes) -> MiscMastodonEditCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscMastodonComment400Error1](content)
            case 401:
                return decode_json[ApiV1MiscMastodonComment401Error1](content)
            case 403:
                return decode_json[ApiV1MiscMastodonComment403Error1](content)
            case 404:
                return decode_json[ApiV1MiscMastodonComment404Error1](content)
            case 429:
                return decode_json[ApiV1MiscMastodonComment429Error1](content)
            case 500:
                return decode_json[ApiV1MiscMastodonComment500Error1](content)
            case 502:
                return decode_json[ApiV1MiscMastodonComment502Error1](content)
            case 503:
                return decode_json[ApiV1MiscMastodonComment503Error1](content)
            case 504:
                return decode_json[ApiV1MiscMastodonComment504Error1](content)
            case _:
                return RawError(status_code, content)


misc_mastodon_edit_comment_error_mapper: Final[
    ErrorMapper[MiscMastodonEditCommentErrorBody]
] = _MiscMastodonEditCommentError()
