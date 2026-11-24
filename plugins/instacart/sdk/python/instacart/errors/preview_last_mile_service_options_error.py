from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PreviewLastMileServiceOptionsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PreviewLastMileServiceOptionsError:
    def map(self, status_code: int, content: bytes) -> PreviewLastMileServiceOptionsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


preview_last_mile_service_options_error_mapper: Final[
    ErrorMapper[PreviewLastMileServiceOptionsErrorBody]
] = _PreviewLastMileServiceOptionsError()
