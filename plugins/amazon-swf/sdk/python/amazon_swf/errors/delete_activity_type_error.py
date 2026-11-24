from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteActivityTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteActivityTypeError:
    def map(self, status_code: int, content: bytes) -> DeleteActivityTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_activity_type_error_mapper: Final[ErrorMapper[DeleteActivityTypeErrorBody]] = _DeleteActivityTypeError()
