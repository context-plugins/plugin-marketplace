from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetTracesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetTracesError:
    def map(self, status_code: int, content: bytes) -> GetTracesErrorBody:
        match status_code:
            case 400 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_traces_error_mapper: Final[ErrorMapper[GetTracesErrorBody]] = _GetTracesError()
