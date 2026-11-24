from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

AiModelsEpAiModelsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _AiModelsEpAiModelsGetError:
    def map(self, status_code: int, content: bytes) -> AiModelsEpAiModelsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


ai_models_ep_ai_models_get_error_mapper: Final[
    ErrorMapper[AiModelsEpAiModelsGetErrorBody]
] = _AiModelsEpAiModelsGetError()
