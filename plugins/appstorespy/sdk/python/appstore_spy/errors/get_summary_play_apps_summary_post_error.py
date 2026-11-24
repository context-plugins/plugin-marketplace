from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_summary401_error1 import PlayAppsSummary401Error1

GetSummaryPlayAppsSummaryPostErrorBody: TypeAlias = PlayAppsSummary401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSummaryPlayAppsSummaryPostError:
    def map(self, status_code: int, content: bytes) -> GetSummaryPlayAppsSummaryPostErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsSummary401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_summary_play_apps_summary_post_error_mapper: Final[
    ErrorMapper[GetSummaryPlayAppsSummaryPostErrorBody]
] = _GetSummaryPlayAppsSummaryPostError()
