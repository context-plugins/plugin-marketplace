from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.http_validation_error import HttpValidationError

GetPulseLatestErrorBody: TypeAlias = ApiErrorModel | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetPulseLatestError:
    def map(self, status_code: int, content: bytes) -> GetPulseLatestErrorBody:
        match status_code:
            case 401 | 402:
                return decode_json[ApiErrorModel](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_pulse_latest_error_mapper: Final[ErrorMapper[GetPulseLatestErrorBody]] = _GetPulseLatestError()
