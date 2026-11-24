from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto
from ..models.insert_metric_response_dto import InsertMetricResponseDto

InsertMetricValueErrorBody: TypeAlias = ErrorResponseDto | InsertMetricResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _InsertMetricValueError:
    def map(self, status_code: int, content: bytes) -> InsertMetricValueErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[ErrorResponseDto](content)
            case 429:
                return decode_json[InsertMetricResponseDto](content)
            case _:
                return RawError(status_code, content)


insert_metric_value_error_mapper: Final[ErrorMapper[InsertMetricValueErrorBody]] = _InsertMetricValueError()
