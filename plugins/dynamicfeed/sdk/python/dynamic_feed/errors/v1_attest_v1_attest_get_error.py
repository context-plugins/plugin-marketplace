from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1AttestV1AttestGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1AttestV1AttestGetError:
    def map(self, status_code: int, content: bytes) -> V1AttestV1AttestGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_attest_v1_attest_get_error_mapper: Final[ErrorMapper[V1AttestV1AttestGetErrorBody]] = _V1AttestV1AttestGetError()
