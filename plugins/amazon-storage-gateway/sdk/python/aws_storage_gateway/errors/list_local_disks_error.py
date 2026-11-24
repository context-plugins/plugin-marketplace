from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListLocalDisksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListLocalDisksError:
    def map(self, status_code: int, content: bytes) -> ListLocalDisksErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_local_disks_error_mapper: Final[ErrorMapper[ListLocalDisksErrorBody]] = _ListLocalDisksError()
