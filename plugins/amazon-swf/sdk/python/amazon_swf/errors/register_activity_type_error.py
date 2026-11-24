from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RegisterActivityTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RegisterActivityTypeError:
    def map(self, status_code: int, content: bytes) -> RegisterActivityTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


register_activity_type_error_mapper: Final[ErrorMapper[RegisterActivityTypeErrorBody]] = _RegisterActivityTypeError()
