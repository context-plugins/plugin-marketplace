from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateActivityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateActivityError:
    def map(self, status_code: int, content: bytes) -> CreateActivityErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_activity_error_mapper: Final[ErrorMapper[CreateActivityErrorBody]] = _CreateActivityError()
