from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_linkedin_mentions_builder400_error1 import ApiV1MiscLinkedinMentionsBuilder400Error1
from ..models.api_v1_misc_linkedin_mentions_builder401_error1 import ApiV1MiscLinkedinMentionsBuilder401Error1
from ..models.api_v1_misc_linkedin_mentions_builder403_error1 import ApiV1MiscLinkedinMentionsBuilder403Error1
from ..models.api_v1_misc_linkedin_mentions_builder404_error1 import ApiV1MiscLinkedinMentionsBuilder404Error1
from ..models.api_v1_misc_linkedin_mentions_builder429_error1 import ApiV1MiscLinkedinMentionsBuilder429Error1
from ..models.api_v1_misc_linkedin_mentions_builder500_error1 import ApiV1MiscLinkedinMentionsBuilder500Error1
from ..models.api_v1_misc_linkedin_mentions_builder502_error1 import ApiV1MiscLinkedinMentionsBuilder502Error1
from ..models.api_v1_misc_linkedin_mentions_builder503_error1 import ApiV1MiscLinkedinMentionsBuilder503Error1
from ..models.api_v1_misc_linkedin_mentions_builder504_error1 import ApiV1MiscLinkedinMentionsBuilder504Error1

MiscLinkedinBuildCommentaryErrorBody: TypeAlias = (
    ApiV1MiscLinkedinMentionsBuilder400Error1
    | ApiV1MiscLinkedinMentionsBuilder401Error1
    | ApiV1MiscLinkedinMentionsBuilder403Error1
    | ApiV1MiscLinkedinMentionsBuilder404Error1
    | ApiV1MiscLinkedinMentionsBuilder429Error1
    | ApiV1MiscLinkedinMentionsBuilder500Error1
    | ApiV1MiscLinkedinMentionsBuilder502Error1
    | ApiV1MiscLinkedinMentionsBuilder503Error1
    | ApiV1MiscLinkedinMentionsBuilder504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscLinkedinBuildCommentaryError:
    def map(self, status_code: int, content: bytes) -> MiscLinkedinBuildCommentaryErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder400Error1](content)
            case 401:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder401Error1](content)
            case 403:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder403Error1](content)
            case 404:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder404Error1](content)
            case 429:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder429Error1](content)
            case 500:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder500Error1](content)
            case 502:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder502Error1](content)
            case 503:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder503Error1](content)
            case 504:
                return decode_json[ApiV1MiscLinkedinMentionsBuilder504Error1](content)
            case _:
                return RawError(status_code, content)


misc_linkedin_build_commentary_error_mapper: Final[
    ErrorMapper[MiscLinkedinBuildCommentaryErrorBody]
] = _MiscLinkedinBuildCommentaryError()
