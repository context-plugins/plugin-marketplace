from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_social_account400_error1 import ApiV1AnalyticsSocialAccount400Error1
from ..models.api_v1_analytics_social_account401_error1 import ApiV1AnalyticsSocialAccount401Error1
from ..models.api_v1_analytics_social_account403_error1 import ApiV1AnalyticsSocialAccount403Error1
from ..models.api_v1_analytics_social_account404_error1 import ApiV1AnalyticsSocialAccount404Error1
from ..models.api_v1_analytics_social_account429_error1 import ApiV1AnalyticsSocialAccount429Error1
from ..models.api_v1_analytics_social_account500_error1 import ApiV1AnalyticsSocialAccount500Error1
from ..models.api_v1_analytics_social_account502_error1 import ApiV1AnalyticsSocialAccount502Error1
from ..models.api_v1_analytics_social_account503_error1 import ApiV1AnalyticsSocialAccount503Error1
from ..models.api_v1_analytics_social_account504_error1 import ApiV1AnalyticsSocialAccount504Error1

AnalyticsGetSocialAccountAnalyticsErrorBody: TypeAlias = (
    ApiV1AnalyticsSocialAccount400Error1
    | ApiV1AnalyticsSocialAccount401Error1
    | ApiV1AnalyticsSocialAccount403Error1
    | ApiV1AnalyticsSocialAccount404Error1
    | ApiV1AnalyticsSocialAccount429Error1
    | ApiV1AnalyticsSocialAccount500Error1
    | ApiV1AnalyticsSocialAccount502Error1
    | ApiV1AnalyticsSocialAccount503Error1
    | ApiV1AnalyticsSocialAccount504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsGetSocialAccountAnalyticsError:
    def map(self, status_code: int, content: bytes) -> AnalyticsGetSocialAccountAnalyticsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsSocialAccount400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsSocialAccount401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsSocialAccount403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsSocialAccount404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsSocialAccount429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsSocialAccount500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsSocialAccount502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsSocialAccount503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsSocialAccount504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_get_social_account_analytics_error_mapper: Final[
    ErrorMapper[AnalyticsGetSocialAccountAnalyticsErrorBody]
] = _AnalyticsGetSocialAccountAnalyticsError()
