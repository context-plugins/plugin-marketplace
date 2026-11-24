from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotaryLogV1NotaryLogGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotaryLogV1NotaryLogGetError:
    def map(self, status_code: int, content: bytes) -> V1NotaryLogV1NotaryLogGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notary_log_v1_notary_log_get_error_mapper: Final[
    ErrorMapper[V1NotaryLogV1NotaryLogGetErrorBody]
] = _V1NotaryLogV1NotaryLogGetError()
