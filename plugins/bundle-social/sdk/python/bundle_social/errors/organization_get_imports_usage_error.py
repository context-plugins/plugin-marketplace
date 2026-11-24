from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_imports400_error1 import ApiV1OrganizationUsageImports400Error1
from ..models.api_v1_organization_usage_imports401_error1 import ApiV1OrganizationUsageImports401Error1
from ..models.api_v1_organization_usage_imports403_error1 import ApiV1OrganizationUsageImports403Error1
from ..models.api_v1_organization_usage_imports404_error1 import ApiV1OrganizationUsageImports404Error1
from ..models.api_v1_organization_usage_imports429_error1 import ApiV1OrganizationUsageImports429Error1
from ..models.api_v1_organization_usage_imports500_error1 import ApiV1OrganizationUsageImports500Error1
from ..models.api_v1_organization_usage_imports502_error1 import ApiV1OrganizationUsageImports502Error1
from ..models.api_v1_organization_usage_imports503_error1 import ApiV1OrganizationUsageImports503Error1
from ..models.api_v1_organization_usage_imports504_error1 import ApiV1OrganizationUsageImports504Error1

OrganizationGetImportsUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsageImports400Error1
    | ApiV1OrganizationUsageImports401Error1
    | ApiV1OrganizationUsageImports403Error1
    | ApiV1OrganizationUsageImports404Error1
    | ApiV1OrganizationUsageImports429Error1
    | ApiV1OrganizationUsageImports500Error1
    | ApiV1OrganizationUsageImports502Error1
    | ApiV1OrganizationUsageImports503Error1
    | ApiV1OrganizationUsageImports504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetImportsUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetImportsUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsageImports400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsageImports401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsageImports403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsageImports404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsageImports429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsageImports500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsageImports502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsageImports503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsageImports504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_imports_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetImportsUsageErrorBody]
] = _OrganizationGetImportsUsageError()
