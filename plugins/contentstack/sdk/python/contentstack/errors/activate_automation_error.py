from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ActivateAutomationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ActivateAutomationError:
    def map(self, status_code: int, content: bytes) -> ActivateAutomationErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


activate_automation_error_mapper: Final[ErrorMapper[ActivateAutomationErrorBody]] = _ActivateAutomationError()
