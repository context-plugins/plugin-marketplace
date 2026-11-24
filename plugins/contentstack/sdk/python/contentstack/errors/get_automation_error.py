from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAutomationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAutomationError:
    def map(self, status_code: int, content: bytes) -> GetAutomationErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_automation_error_mapper: Final[ErrorMapper[GetAutomationErrorBody]] = _GetAutomationError()
