from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1ProToolDiscoverV1ProToolToolGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1ProToolDiscoverV1ProToolToolGetError:
    def map(self, status_code: int, content: bytes) -> V1ProToolDiscoverV1ProToolToolGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_pro_tool_discover_v1_pro_tool_tool_get_error_mapper: Final[
    ErrorMapper[V1ProToolDiscoverV1ProToolToolGetErrorBody]
] = _V1ProToolDiscoverV1ProToolToolGetError()
