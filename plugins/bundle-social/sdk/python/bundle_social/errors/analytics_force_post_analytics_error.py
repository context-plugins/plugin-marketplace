from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_post_force400_error1 import ApiV1AnalyticsPostForce400Error1
from ..models.api_v1_analytics_post_force401_error1 import ApiV1AnalyticsPostForce401Error1
from ..models.api_v1_analytics_post_force403_error1 import ApiV1AnalyticsPostForce403Error1
from ..models.api_v1_analytics_post_force404_error1 import ApiV1AnalyticsPostForce404Error1
from ..models.api_v1_analytics_post_force429_error1 import ApiV1AnalyticsPostForce429Error1
from ..models.api_v1_analytics_post_force500_error1 import ApiV1AnalyticsPostForce500Error1
from ..models.api_v1_analytics_post_force502_error1 import ApiV1AnalyticsPostForce502Error1
from ..models.api_v1_analytics_post_force503_error1 import ApiV1AnalyticsPostForce503Error1
from ..models.api_v1_analytics_post_force504_error1 import ApiV1AnalyticsPostForce504Error1

AnalyticsForcePostAnalyticsErrorBody: TypeAlias = (
    ApiV1AnalyticsPostForce400Error1
    | ApiV1AnalyticsPostForce401Error1
    | ApiV1AnalyticsPostForce403Error1
    | ApiV1AnalyticsPostForce404Error1
    | ApiV1AnalyticsPostForce429Error1
    | ApiV1AnalyticsPostForce500Error1
    | ApiV1AnalyticsPostForce502Error1
    | ApiV1AnalyticsPostForce503Error1
    | ApiV1AnalyticsPostForce504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsForcePostAnalyticsError:
    def map(self, status_code: int, content: bytes) -> AnalyticsForcePostAnalyticsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsPostForce400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsPostForce401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsPostForce403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsPostForce404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsPostForce429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsPostForce500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsPostForce502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsPostForce503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsPostForce504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_force_post_analytics_error_mapper: Final[
    ErrorMapper[AnalyticsForcePostAnalyticsErrorBody]
] = _AnalyticsForcePostAnalyticsError()
