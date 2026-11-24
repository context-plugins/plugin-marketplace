from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StatutesByStateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StatutesByStateError:
    def map(self, status_code: int, content: bytes) -> StatutesByStateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


statutes_by_state_error_mapper: Final[ErrorMapper[StatutesByStateErrorBody]] = _StatutesByStateError()
