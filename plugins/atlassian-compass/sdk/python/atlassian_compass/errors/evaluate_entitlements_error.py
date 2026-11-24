from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

EvaluateEntitlementsErrorBody: TypeAlias = ErrorResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _EvaluateEntitlementsError:
    def map(self, status_code: int, content: bytes) -> EvaluateEntitlementsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseDto](content)
            case _:
                return RawError(status_code, content)


evaluate_entitlements_error_mapper: Final[ErrorMapper[EvaluateEntitlementsErrorBody]] = _EvaluateEntitlementsError()
