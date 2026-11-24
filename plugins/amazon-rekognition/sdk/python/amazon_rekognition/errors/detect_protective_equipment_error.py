from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectProtectiveEquipmentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectProtectiveEquipmentError:
    def map(self, status_code: int, content: bytes) -> DetectProtectiveEquipmentErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_protective_equipment_error_mapper: Final[
    ErrorMapper[DetectProtectiveEquipmentErrorBody]
] = _DetectProtectiveEquipmentError()
