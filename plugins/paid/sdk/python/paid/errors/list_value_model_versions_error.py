from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListValueModelVersionsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListValueModelVersionsError:
    def map(self, status_code: int, content: bytes) -> ListValueModelVersionsErrorBody:
        match status_code:
            case 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_value_model_versions_error_mapper: Final[
    ErrorMapper[ListValueModelVersionsErrorBody]
] = _ListValueModelVersionsError()
