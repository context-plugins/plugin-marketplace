from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.analytics_error import AnalyticsError

ListPullRequestAnalyticsErrorBody: TypeAlias = AnalyticsError | RawError


@dataclass(frozen=True, slots=True)
class _ListPullRequestAnalyticsError:
    def map(self, status_code: int, content: bytes) -> ListPullRequestAnalyticsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[AnalyticsError](content)
            case _:
                return RawError(status_code, content)


list_pull_request_analytics_error_mapper: Final[
    ErrorMapper[ListPullRequestAnalyticsErrorBody]
] = _ListPullRequestAnalyticsError()
