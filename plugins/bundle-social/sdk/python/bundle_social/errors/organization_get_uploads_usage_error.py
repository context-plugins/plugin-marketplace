from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_uploads400_error1 import ApiV1OrganizationUsageUploads400Error1
from ..models.api_v1_organization_usage_uploads401_error1 import ApiV1OrganizationUsageUploads401Error1
from ..models.api_v1_organization_usage_uploads403_error1 import ApiV1OrganizationUsageUploads403Error1
from ..models.api_v1_organization_usage_uploads404_error1 import ApiV1OrganizationUsageUploads404Error1
from ..models.api_v1_organization_usage_uploads429_error1 import ApiV1OrganizationUsageUploads429Error1
from ..models.api_v1_organization_usage_uploads500_error1 import ApiV1OrganizationUsageUploads500Error1
from ..models.api_v1_organization_usage_uploads502_error1 import ApiV1OrganizationUsageUploads502Error1
from ..models.api_v1_organization_usage_uploads503_error1 import ApiV1OrganizationUsageUploads503Error1
from ..models.api_v1_organization_usage_uploads504_error1 import ApiV1OrganizationUsageUploads504Error1

OrganizationGetUploadsUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsageUploads400Error1
    | ApiV1OrganizationUsageUploads401Error1
    | ApiV1OrganizationUsageUploads403Error1
    | ApiV1OrganizationUsageUploads404Error1
    | ApiV1OrganizationUsageUploads429Error1
    | ApiV1OrganizationUsageUploads500Error1
    | ApiV1OrganizationUsageUploads502Error1
    | ApiV1OrganizationUsageUploads503Error1
    | ApiV1OrganizationUsageUploads504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetUploadsUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetUploadsUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsageUploads400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsageUploads401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsageUploads403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsageUploads404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsageUploads429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsageUploads500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsageUploads502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsageUploads503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsageUploads504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_uploads_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetUploadsUsageErrorBody]
] = _OrganizationGetUploadsUsageError()
