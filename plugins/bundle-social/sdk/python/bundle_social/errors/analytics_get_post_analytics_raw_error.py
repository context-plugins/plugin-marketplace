from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_post_raw400_error1 import ApiV1AnalyticsPostRaw400Error1
from ..models.api_v1_analytics_post_raw401_error1 import ApiV1AnalyticsPostRaw401Error1
from ..models.api_v1_analytics_post_raw403_error1 import ApiV1AnalyticsPostRaw403Error1
from ..models.api_v1_analytics_post_raw404_error1 import ApiV1AnalyticsPostRaw404Error1
from ..models.api_v1_analytics_post_raw429_error1 import ApiV1AnalyticsPostRaw429Error1
from ..models.api_v1_analytics_post_raw500_error1 import ApiV1AnalyticsPostRaw500Error1
from ..models.api_v1_analytics_post_raw502_error1 import ApiV1AnalyticsPostRaw502Error1
from ..models.api_v1_analytics_post_raw503_error1 import ApiV1AnalyticsPostRaw503Error1
from ..models.api_v1_analytics_post_raw504_error1 import ApiV1AnalyticsPostRaw504Error1

AnalyticsGetPostAnalyticsRawErrorBody: TypeAlias = (
    ApiV1AnalyticsPostRaw400Error1
    | ApiV1AnalyticsPostRaw401Error1
    | ApiV1AnalyticsPostRaw403Error1
    | ApiV1AnalyticsPostRaw404Error1
    | ApiV1AnalyticsPostRaw429Error1
    | ApiV1AnalyticsPostRaw500Error1
    | ApiV1AnalyticsPostRaw502Error1
    | ApiV1AnalyticsPostRaw503Error1
    | ApiV1AnalyticsPostRaw504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsGetPostAnalyticsRawError:
    def map(self, status_code: int, content: bytes) -> AnalyticsGetPostAnalyticsRawErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsPostRaw400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsPostRaw401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsPostRaw403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsPostRaw404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsPostRaw429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsPostRaw500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsPostRaw502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsPostRaw503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsPostRaw504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_get_post_analytics_raw_error_mapper: Final[
    ErrorMapper[AnalyticsGetPostAnalyticsRawErrorBody]
] = _AnalyticsGetPostAnalyticsRawError()
