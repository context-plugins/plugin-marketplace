from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteInterconnectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteInterconnectError:
    def map(self, status_code: int, content: bytes) -> DeleteInterconnectErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_interconnect_error_mapper: Final[ErrorMapper[DeleteInterconnectErrorBody]] = _DeleteInterconnectError()
