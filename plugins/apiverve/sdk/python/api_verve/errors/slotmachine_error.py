from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SlotmachineErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SlotmachineError:
    def map(self, status_code: int, content: bytes) -> SlotmachineErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


slotmachine_error_mapper: Final[ErrorMapper[SlotmachineErrorBody]] = _SlotmachineError()
