from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAllAutomationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAllAutomationsError:
    def map(self, status_code: int, content: bytes) -> GetAllAutomationsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_all_automations_error_mapper: Final[ErrorMapper[GetAllAutomationsErrorBody]] = _GetAllAutomationsError()
