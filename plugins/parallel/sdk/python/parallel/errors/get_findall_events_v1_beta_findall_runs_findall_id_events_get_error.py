from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError:
    def map(self, status_code: int, content: bytes) -> GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody:
        match status_code:
            case 404:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_findall_events_v1_beta_findall_runs_findall_id_events_get_error_mapper: Final[
    ErrorMapper[GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody]
] = _GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError()
