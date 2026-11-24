from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

UpdateLeadErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _UpdateLeadError:
    def map(self, status_code: int, content: bytes) -> UpdateLeadErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


update_lead_error_mapper: Final[ErrorMapper[UpdateLeadErrorBody]] = _UpdateLeadError()
