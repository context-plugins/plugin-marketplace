from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateStakeholder2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateStakeholder2Error:
    def map(self, status_code: int, content: bytes) -> CreateStakeholder2ErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_stakeholder2_error_mapper: Final[ErrorMapper[CreateStakeholder2ErrorBody]] = _CreateStakeholder2Error()
