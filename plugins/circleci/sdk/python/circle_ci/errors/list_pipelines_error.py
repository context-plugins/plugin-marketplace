from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListPipelinesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListPipelinesError:
    def map(self, status_code: int, content: bytes) -> ListPipelinesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_pipelines_error_mapper: Final[ErrorMapper[ListPipelinesErrorBody]] = _ListPipelinesError()
