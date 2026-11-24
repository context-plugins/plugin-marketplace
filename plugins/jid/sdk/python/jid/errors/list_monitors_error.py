from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListMonitorsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListMonitorsError:
    def map(self, status_code: int, content: bytes) -> ListMonitorsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_monitors_error_mapper: Final[ErrorMapper[ListMonitorsErrorBody]] = _ListMonitorsError()
