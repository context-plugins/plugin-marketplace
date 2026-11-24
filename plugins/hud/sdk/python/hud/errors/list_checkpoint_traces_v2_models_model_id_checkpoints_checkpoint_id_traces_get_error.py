from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error_mapper: Final[
    ErrorMapper[ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody]
] = _ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError()
