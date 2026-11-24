from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

SetModelHeadV2ModelsModelIdHeadPutErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SetModelHeadV2ModelsModelIdHeadPutError:
    def map(self, status_code: int, content: bytes) -> SetModelHeadV2ModelsModelIdHeadPutErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


set_model_head_v2_models_model_id_head_put_error_mapper: Final[
    ErrorMapper[SetModelHeadV2ModelsModelIdHeadPutErrorBody]
] = _SetModelHeadV2ModelsModelIdHeadPutError()
