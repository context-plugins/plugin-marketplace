from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_post400_error1 import ApiV1AnalyticsPost400Error1
from ..models.api_v1_analytics_post401_error1 import ApiV1AnalyticsPost401Error1
from ..models.api_v1_analytics_post403_error1 import ApiV1AnalyticsPost403Error1
from ..models.api_v1_analytics_post404_error1 import ApiV1AnalyticsPost404Error1
from ..models.api_v1_analytics_post429_error1 import ApiV1AnalyticsPost429Error1
from ..models.api_v1_analytics_post500_error1 import ApiV1AnalyticsPost500Error1
from ..models.api_v1_analytics_post502_error1 import ApiV1AnalyticsPost502Error1
from ..models.api_v1_analytics_post503_error1 import ApiV1AnalyticsPost503Error1
from ..models.api_v1_analytics_post504_error1 import ApiV1AnalyticsPost504Error1

AnalyticsGetPostAnalyticsErrorBody: TypeAlias = (
    ApiV1AnalyticsPost400Error1
    | ApiV1AnalyticsPost401Error1
    | ApiV1AnalyticsPost403Error1
    | ApiV1AnalyticsPost404Error1
    | ApiV1AnalyticsPost429Error1
    | ApiV1AnalyticsPost500Error1
    | ApiV1AnalyticsPost502Error1
    | ApiV1AnalyticsPost503Error1
    | ApiV1AnalyticsPost504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsGetPostAnalyticsError:
    def map(self, status_code: int, content: bytes) -> AnalyticsGetPostAnalyticsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsPost400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsPost401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsPost403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsPost404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsPost429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsPost500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsPost502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsPost503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsPost504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_get_post_analytics_error_mapper: Final[
    ErrorMapper[AnalyticsGetPostAnalyticsErrorBody]
] = _AnalyticsGetPostAnalyticsError()
