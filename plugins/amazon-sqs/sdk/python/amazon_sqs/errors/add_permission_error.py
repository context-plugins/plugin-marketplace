from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddPermissionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddPermissionError:
    def map(self, status_code: int, content: bytes) -> AddPermissionErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_permission_error_mapper: Final[ErrorMapper[AddPermissionErrorBody]] = _AddPermissionError()
