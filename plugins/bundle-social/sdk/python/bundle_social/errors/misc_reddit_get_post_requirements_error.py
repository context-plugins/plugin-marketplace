from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_reddit_post_requirements400_error1 import ApiV1MiscRedditPostRequirements400Error1
from ..models.api_v1_misc_reddit_post_requirements401_error1 import ApiV1MiscRedditPostRequirements401Error1
from ..models.api_v1_misc_reddit_post_requirements403_error1 import ApiV1MiscRedditPostRequirements403Error1
from ..models.api_v1_misc_reddit_post_requirements404_error1 import ApiV1MiscRedditPostRequirements404Error1
from ..models.api_v1_misc_reddit_post_requirements429_error1 import ApiV1MiscRedditPostRequirements429Error1
from ..models.api_v1_misc_reddit_post_requirements500_error1 import ApiV1MiscRedditPostRequirements500Error1
from ..models.api_v1_misc_reddit_post_requirements502_error1 import ApiV1MiscRedditPostRequirements502Error1
from ..models.api_v1_misc_reddit_post_requirements503_error1 import ApiV1MiscRedditPostRequirements503Error1
from ..models.api_v1_misc_reddit_post_requirements504_error1 import ApiV1MiscRedditPostRequirements504Error1

MiscRedditGetPostRequirementsErrorBody: TypeAlias = (
    ApiV1MiscRedditPostRequirements400Error1
    | ApiV1MiscRedditPostRequirements401Error1
    | ApiV1MiscRedditPostRequirements403Error1
    | ApiV1MiscRedditPostRequirements404Error1
    | ApiV1MiscRedditPostRequirements429Error1
    | ApiV1MiscRedditPostRequirements500Error1
    | ApiV1MiscRedditPostRequirements502Error1
    | ApiV1MiscRedditPostRequirements503Error1
    | ApiV1MiscRedditPostRequirements504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscRedditGetPostRequirementsError:
    def map(self, status_code: int, content: bytes) -> MiscRedditGetPostRequirementsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscRedditPostRequirements400Error1](content)
            case 401:
                return decode_json[ApiV1MiscRedditPostRequirements401Error1](content)
            case 403:
                return decode_json[ApiV1MiscRedditPostRequirements403Error1](content)
            case 404:
                return decode_json[ApiV1MiscRedditPostRequirements404Error1](content)
            case 429:
                return decode_json[ApiV1MiscRedditPostRequirements429Error1](content)
            case 500:
                return decode_json[ApiV1MiscRedditPostRequirements500Error1](content)
            case 502:
                return decode_json[ApiV1MiscRedditPostRequirements502Error1](content)
            case 503:
                return decode_json[ApiV1MiscRedditPostRequirements503Error1](content)
            case 504:
                return decode_json[ApiV1MiscRedditPostRequirements504Error1](content)
            case _:
                return RawError(status_code, content)


misc_reddit_get_post_requirements_error_mapper: Final[
    ErrorMapper[MiscRedditGetPostRequirementsErrorBody]
] = _MiscRedditGetPostRequirementsError()
