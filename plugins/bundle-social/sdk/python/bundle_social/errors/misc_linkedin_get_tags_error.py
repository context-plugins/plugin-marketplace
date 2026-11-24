from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_linkedin_mentions_tags400_error1 import ApiV1MiscLinkedinMentionsTags400Error1
from ..models.api_v1_misc_linkedin_mentions_tags401_error1 import ApiV1MiscLinkedinMentionsTags401Error1
from ..models.api_v1_misc_linkedin_mentions_tags403_error1 import ApiV1MiscLinkedinMentionsTags403Error1
from ..models.api_v1_misc_linkedin_mentions_tags404_error1 import ApiV1MiscLinkedinMentionsTags404Error1
from ..models.api_v1_misc_linkedin_mentions_tags429_error1 import ApiV1MiscLinkedinMentionsTags429Error1
from ..models.api_v1_misc_linkedin_mentions_tags500_error1 import ApiV1MiscLinkedinMentionsTags500Error1
from ..models.api_v1_misc_linkedin_mentions_tags502_error1 import ApiV1MiscLinkedinMentionsTags502Error1
from ..models.api_v1_misc_linkedin_mentions_tags503_error1 import ApiV1MiscLinkedinMentionsTags503Error1
from ..models.api_v1_misc_linkedin_mentions_tags504_error1 import ApiV1MiscLinkedinMentionsTags504Error1

MiscLinkedinGetTagsErrorBody: TypeAlias = (
    ApiV1MiscLinkedinMentionsTags400Error1
    | ApiV1MiscLinkedinMentionsTags401Error1
    | ApiV1MiscLinkedinMentionsTags403Error1
    | ApiV1MiscLinkedinMentionsTags404Error1
    | ApiV1MiscLinkedinMentionsTags429Error1
    | ApiV1MiscLinkedinMentionsTags500Error1
    | ApiV1MiscLinkedinMentionsTags502Error1
    | ApiV1MiscLinkedinMentionsTags503Error1
    | ApiV1MiscLinkedinMentionsTags504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscLinkedinGetTagsError:
    def map(self, status_code: int, content: bytes) -> MiscLinkedinGetTagsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscLinkedinMentionsTags400Error1](content)
            case 401:
                return decode_json[ApiV1MiscLinkedinMentionsTags401Error1](content)
            case 403:
                return decode_json[ApiV1MiscLinkedinMentionsTags403Error1](content)
            case 404:
                return decode_json[ApiV1MiscLinkedinMentionsTags404Error1](content)
            case 429:
                return decode_json[ApiV1MiscLinkedinMentionsTags429Error1](content)
            case 500:
                return decode_json[ApiV1MiscLinkedinMentionsTags500Error1](content)
            case 502:
                return decode_json[ApiV1MiscLinkedinMentionsTags502Error1](content)
            case 503:
                return decode_json[ApiV1MiscLinkedinMentionsTags503Error1](content)
            case 504:
                return decode_json[ApiV1MiscLinkedinMentionsTags504Error1](content)
            case _:
                return RawError(status_code, content)


misc_linkedin_get_tags_error_mapper: Final[ErrorMapper[MiscLinkedinGetTagsErrorBody]] = _MiscLinkedinGetTagsError()
