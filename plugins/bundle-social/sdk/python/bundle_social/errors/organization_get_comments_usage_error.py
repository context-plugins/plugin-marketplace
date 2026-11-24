from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_comments400_error1 import ApiV1OrganizationUsageComments400Error1
from ..models.api_v1_organization_usage_comments401_error1 import ApiV1OrganizationUsageComments401Error1
from ..models.api_v1_organization_usage_comments403_error1 import ApiV1OrganizationUsageComments403Error1
from ..models.api_v1_organization_usage_comments404_error1 import ApiV1OrganizationUsageComments404Error1
from ..models.api_v1_organization_usage_comments429_error1 import ApiV1OrganizationUsageComments429Error1
from ..models.api_v1_organization_usage_comments500_error1 import ApiV1OrganizationUsageComments500Error1
from ..models.api_v1_organization_usage_comments502_error1 import ApiV1OrganizationUsageComments502Error1
from ..models.api_v1_organization_usage_comments503_error1 import ApiV1OrganizationUsageComments503Error1
from ..models.api_v1_organization_usage_comments504_error1 import ApiV1OrganizationUsageComments504Error1

OrganizationGetCommentsUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsageComments400Error1
    | ApiV1OrganizationUsageComments401Error1
    | ApiV1OrganizationUsageComments403Error1
    | ApiV1OrganizationUsageComments404Error1
    | ApiV1OrganizationUsageComments429Error1
    | ApiV1OrganizationUsageComments500Error1
    | ApiV1OrganizationUsageComments502Error1
    | ApiV1OrganizationUsageComments503Error1
    | ApiV1OrganizationUsageComments504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetCommentsUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetCommentsUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsageComments400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsageComments401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsageComments403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsageComments404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsageComments429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsageComments500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsageComments502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsageComments503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsageComments504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_comments_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetCommentsUsageErrorBody]
] = _OrganizationGetCommentsUsageError()
