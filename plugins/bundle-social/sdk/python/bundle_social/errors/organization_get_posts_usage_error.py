from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_posts400_error1 import ApiV1OrganizationUsagePosts400Error1
from ..models.api_v1_organization_usage_posts401_error1 import ApiV1OrganizationUsagePosts401Error1
from ..models.api_v1_organization_usage_posts403_error1 import ApiV1OrganizationUsagePosts403Error1
from ..models.api_v1_organization_usage_posts404_error1 import ApiV1OrganizationUsagePosts404Error1
from ..models.api_v1_organization_usage_posts429_error1 import ApiV1OrganizationUsagePosts429Error1
from ..models.api_v1_organization_usage_posts500_error1 import ApiV1OrganizationUsagePosts500Error1
from ..models.api_v1_organization_usage_posts502_error1 import ApiV1OrganizationUsagePosts502Error1
from ..models.api_v1_organization_usage_posts503_error1 import ApiV1OrganizationUsagePosts503Error1
from ..models.api_v1_organization_usage_posts504_error1 import ApiV1OrganizationUsagePosts504Error1

OrganizationGetPostsUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsagePosts400Error1
    | ApiV1OrganizationUsagePosts401Error1
    | ApiV1OrganizationUsagePosts403Error1
    | ApiV1OrganizationUsagePosts404Error1
    | ApiV1OrganizationUsagePosts429Error1
    | ApiV1OrganizationUsagePosts500Error1
    | ApiV1OrganizationUsagePosts502Error1
    | ApiV1OrganizationUsagePosts503Error1
    | ApiV1OrganizationUsagePosts504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetPostsUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetPostsUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsagePosts400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsagePosts401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsagePosts403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsagePosts404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsagePosts429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsagePosts500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsagePosts502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsagePosts503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsagePosts504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_posts_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetPostsUsageErrorBody]
] = _OrganizationGetPostsUsageError()
