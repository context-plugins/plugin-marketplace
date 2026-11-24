from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SendTaskSuccessErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SendTaskSuccessError:
    def map(self, status_code: int, content: bytes) -> SendTaskSuccessErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


send_task_success_error_mapper: Final[ErrorMapper[SendTaskSuccessErrorBody]] = _SendTaskSuccessError()
