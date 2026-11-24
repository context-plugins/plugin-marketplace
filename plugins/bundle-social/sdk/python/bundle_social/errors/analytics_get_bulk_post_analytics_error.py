from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_analytics_post_bulk400_error1 import ApiV1AnalyticsPostBulk400Error1
from ..models.api_v1_analytics_post_bulk401_error1 import ApiV1AnalyticsPostBulk401Error1
from ..models.api_v1_analytics_post_bulk403_error1 import ApiV1AnalyticsPostBulk403Error1
from ..models.api_v1_analytics_post_bulk404_error1 import ApiV1AnalyticsPostBulk404Error1
from ..models.api_v1_analytics_post_bulk429_error1 import ApiV1AnalyticsPostBulk429Error1
from ..models.api_v1_analytics_post_bulk500_error1 import ApiV1AnalyticsPostBulk500Error1
from ..models.api_v1_analytics_post_bulk502_error1 import ApiV1AnalyticsPostBulk502Error1
from ..models.api_v1_analytics_post_bulk503_error1 import ApiV1AnalyticsPostBulk503Error1
from ..models.api_v1_analytics_post_bulk504_error1 import ApiV1AnalyticsPostBulk504Error1

AnalyticsGetBulkPostAnalyticsErrorBody: TypeAlias = (
    ApiV1AnalyticsPostBulk400Error1
    | ApiV1AnalyticsPostBulk401Error1
    | ApiV1AnalyticsPostBulk403Error1
    | ApiV1AnalyticsPostBulk404Error1
    | ApiV1AnalyticsPostBulk429Error1
    | ApiV1AnalyticsPostBulk500Error1
    | ApiV1AnalyticsPostBulk502Error1
    | ApiV1AnalyticsPostBulk503Error1
    | ApiV1AnalyticsPostBulk504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AnalyticsGetBulkPostAnalyticsError:
    def map(self, status_code: int, content: bytes) -> AnalyticsGetBulkPostAnalyticsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AnalyticsPostBulk400Error1](content)
            case 401:
                return decode_json[ApiV1AnalyticsPostBulk401Error1](content)
            case 403:
                return decode_json[ApiV1AnalyticsPostBulk403Error1](content)
            case 404:
                return decode_json[ApiV1AnalyticsPostBulk404Error1](content)
            case 429:
                return decode_json[ApiV1AnalyticsPostBulk429Error1](content)
            case 500:
                return decode_json[ApiV1AnalyticsPostBulk500Error1](content)
            case 502:
                return decode_json[ApiV1AnalyticsPostBulk502Error1](content)
            case 503:
                return decode_json[ApiV1AnalyticsPostBulk503Error1](content)
            case 504:
                return decode_json[ApiV1AnalyticsPostBulk504Error1](content)
            case _:
                return RawError(status_code, content)


analytics_get_bulk_post_analytics_error_mapper: Final[
    ErrorMapper[AnalyticsGetBulkPostAnalyticsErrorBody]
] = _AnalyticsGetBulkPostAnalyticsError()
