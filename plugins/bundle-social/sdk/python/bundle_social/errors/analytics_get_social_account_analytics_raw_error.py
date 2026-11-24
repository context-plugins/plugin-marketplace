from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_social_account_raw400_error1 import ApiV1AnalyticsSocialAccountRaw400Error1
from ..models.api_v1_analytics_social_account_raw401_error1 import ApiV1AnalyticsSocialAccountRaw401Error1
from ..models.api_v1_analytics_social_account_raw403_error1 import ApiV1AnalyticsSocialAccountRaw403Error1
from ..models.api_v1_analytics_social_account_raw404_error1 import ApiV1AnalyticsSocialAccountRaw404Error1
from ..models.api_v1_analytics_social_account_raw429_error1 import ApiV1AnalyticsSocialAccountRaw429Error1
from ..models.api_v1_analytics_social_account_raw500_error1 import ApiV1AnalyticsSocialAccountRaw500Error1
from ..models.api_v1_analytics_social_account_raw502_error1 import ApiV1AnalyticsSocialAccountRaw502Error1
from ..models.api_v1_analytics_social_account_raw503_error1 import ApiV1AnalyticsSocialAccountRaw503Error1
from ..models.api_v1_analytics_social_account_raw504_error1 import ApiV1AnalyticsSocialAccountRaw504Error1

AnalyticsGetSocialAccountAnalyticsRawErrorBody: TypeAlias = (
    ApiV1AnalyticsSocialAccountRaw400Error1
    | ApiV1AnalyticsSocialAccountRaw401Error1
    | ApiV1AnalyticsSocialAccountRaw403Error1
    | ApiV1AnalyticsSocialAccountRaw404Error1
    | ApiV1AnalyticsSocialAccountRaw429Error1
    | ApiV1AnalyticsSocialAccountRaw500Error1
    | ApiV1AnalyticsSocialAccountRaw502Error1
    | ApiV1AnalyticsSocialAccountRaw503Error1
    | ApiV1AnalyticsSocialAccountRaw504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsGetSocialAccountAnalyticsRawError:
    def map(self, status_code: int, content: bytes) -> AnalyticsGetSocialAccountAnalyticsRawErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsSocialAccountRaw400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsSocialAccountRaw401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsSocialAccountRaw403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsSocialAccountRaw404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsSocialAccountRaw429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsSocialAccountRaw500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsSocialAccountRaw502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsSocialAccountRaw503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsSocialAccountRaw504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_get_social_account_analytics_raw_error_mapper: Final[
    ErrorMapper[AnalyticsGetSocialAccountAnalyticsRawErrorBody]
] = _AnalyticsGetSocialAccountAnalyticsRawError()
