from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetPipelineConfigErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineConfigError:
    def map(self, status_code: int, content: bytes) -> GetPipelineConfigErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_pipeline_config_error_mapper: Final[ErrorMapper[GetPipelineConfigErrorBody]] = _GetPipelineConfigError()
