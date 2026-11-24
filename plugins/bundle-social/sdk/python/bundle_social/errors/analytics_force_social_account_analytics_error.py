from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_social_account_force400_error1 import ApiV1AnalyticsSocialAccountForce400Error1
from ..models.api_v1_analytics_social_account_force401_error1 import ApiV1AnalyticsSocialAccountForce401Error1
from ..models.api_v1_analytics_social_account_force403_error1 import ApiV1AnalyticsSocialAccountForce403Error1
from ..models.api_v1_analytics_social_account_force404_error1 import ApiV1AnalyticsSocialAccountForce404Error1
from ..models.api_v1_analytics_social_account_force429_error1 import ApiV1AnalyticsSocialAccountForce429Error1
from ..models.api_v1_analytics_social_account_force500_error1 import ApiV1AnalyticsSocialAccountForce500Error1
from ..models.api_v1_analytics_social_account_force502_error1 import ApiV1AnalyticsSocialAccountForce502Error1
from ..models.api_v1_analytics_social_account_force503_error1 import ApiV1AnalyticsSocialAccountForce503Error1
from ..models.api_v1_analytics_social_account_force504_error1 import ApiV1AnalyticsSocialAccountForce504Error1

AnalyticsForceSocialAccountAnalyticsErrorBody: TypeAlias = (
    ApiV1AnalyticsSocialAccountForce400Error1
    | ApiV1AnalyticsSocialAccountForce401Error1
    | ApiV1AnalyticsSocialAccountForce403Error1
    | ApiV1AnalyticsSocialAccountForce404Error1
    | ApiV1AnalyticsSocialAccountForce429Error1
    | ApiV1AnalyticsSocialAccountForce500Error1
    | ApiV1AnalyticsSocialAccountForce502Error1
    | ApiV1AnalyticsSocialAccountForce503Error1
    | ApiV1AnalyticsSocialAccountForce504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsForceSocialAccountAnalyticsError:
    def map(self, status_code: int, content: bytes) -> AnalyticsForceSocialAccountAnalyticsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsSocialAccountForce400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsSocialAccountForce401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsSocialAccountForce403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsSocialAccountForce404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsSocialAccountForce429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsSocialAccountForce500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsSocialAccountForce502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsSocialAccountForce503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsSocialAccountForce504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_force_social_account_analytics_error_mapper: Final[
    ErrorMapper[AnalyticsForceSocialAccountAnalyticsErrorBody]
] = _AnalyticsForceSocialAccountAnalyticsError()
