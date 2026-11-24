from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

GetInsightSummariesErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _GetInsightSummariesError:
    def map(self, status_code: int, content: bytes) -> GetInsightSummariesErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


get_insight_summaries_error_mapper: Final[ErrorMapper[GetInsightSummariesErrorBody]] = _GetInsightSummariesError()
