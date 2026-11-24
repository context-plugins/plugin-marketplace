from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateValueModelErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateValueModelError:
    def map(self, status_code: int, content: bytes) -> UpdateValueModelErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_value_model_error_mapper: Final[ErrorMapper[UpdateValueModelErrorBody]] = _UpdateValueModelError()
