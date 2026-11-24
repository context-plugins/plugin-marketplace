from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

TestMetricResultsControllerFetchErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TestMetricResultsControllerFetchError:
    def map(self, status_code: int, content: bytes) -> TestMetricResultsControllerFetchErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


test_metric_results_controller_fetch_error_mapper: Final[
    ErrorMapper[TestMetricResultsControllerFetchErrorBody]
] = _TestMetricResultsControllerFetchError()
