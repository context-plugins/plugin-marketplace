from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateOrUpdateReport2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateOrUpdateReport2Error:
    def map(self, status_code: int, content: bytes) -> CreateOrUpdateReport2ErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_or_update_report2_error_mapper: Final[
    ErrorMapper[CreateOrUpdateReport2ErrorBody]
] = _CreateOrUpdateReport2Error()
