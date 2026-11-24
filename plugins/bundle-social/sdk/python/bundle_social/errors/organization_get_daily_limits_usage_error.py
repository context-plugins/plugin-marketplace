from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_organization_usage_daily_limits400_error1 import ApiV1OrganizationUsageDailyLimits400Error1
from ..models.api_v1_organization_usage_daily_limits401_error1 import ApiV1OrganizationUsageDailyLimits401Error1
from ..models.api_v1_organization_usage_daily_limits403_error1 import ApiV1OrganizationUsageDailyLimits403Error1
from ..models.api_v1_organization_usage_daily_limits404_error1 import ApiV1OrganizationUsageDailyLimits404Error1
from ..models.api_v1_organization_usage_daily_limits429_error1 import ApiV1OrganizationUsageDailyLimits429Error1
from ..models.api_v1_organization_usage_daily_limits500_error1 import ApiV1OrganizationUsageDailyLimits500Error1
from ..models.api_v1_organization_usage_daily_limits502_error1 import ApiV1OrganizationUsageDailyLimits502Error1
from ..models.api_v1_organization_usage_daily_limits503_error1 import ApiV1OrganizationUsageDailyLimits503Error1
from ..models.api_v1_organization_usage_daily_limits504_error1 import ApiV1OrganizationUsageDailyLimits504Error1

OrganizationGetDailyLimitsUsageErrorBody: TypeAlias = (
    ApiV1OrganizationUsageDailyLimits400Error1
    | ApiV1OrganizationUsageDailyLimits401Error1
    | ApiV1OrganizationUsageDailyLimits403Error1
    | ApiV1OrganizationUsageDailyLimits404Error1
    | ApiV1OrganizationUsageDailyLimits429Error1
    | ApiV1OrganizationUsageDailyLimits500Error1
    | ApiV1OrganizationUsageDailyLimits502Error1
    | ApiV1OrganizationUsageDailyLimits503Error1
    | ApiV1OrganizationUsageDailyLimits504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _OrganizationGetDailyLimitsUsageError:
    def map(self, status_code: int, content: bytes) -> OrganizationGetDailyLimitsUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1OrganizationUsageDailyLimits400Error1](content)
            case 401:
                return decode_json[ApiV1OrganizationUsageDailyLimits401Error1](content)
            case 403:
                return decode_json[ApiV1OrganizationUsageDailyLimits403Error1](content)
            case 404:
                return decode_json[ApiV1OrganizationUsageDailyLimits404Error1](content)
            case 429:
                return decode_json[ApiV1OrganizationUsageDailyLimits429Error1](content)
            case 500:
                return decode_json[ApiV1OrganizationUsageDailyLimits500Error1](content)
            case 502:
                return decode_json[ApiV1OrganizationUsageDailyLimits502Error1](content)
            case 503:
                return decode_json[ApiV1OrganizationUsageDailyLimits503Error1](content)
            case 504:
                return decode_json[ApiV1OrganizationUsageDailyLimits504Error1](content)
            case _:
                return RawError(status_code, content)


organization_get_daily_limits_usage_error_mapper: Final[
    ErrorMapper[OrganizationGetDailyLimitsUsageErrorBody]
] = _OrganizationGetDailyLimitsUsageError()
