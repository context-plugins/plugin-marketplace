from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ModelInferenceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ModelInferenceError:
    def map(self, status_code: int, content: bytes) -> ModelInferenceErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


model_inference_error_mapper: Final[ErrorMapper[ModelInferenceErrorBody]] = _ModelInferenceError()
