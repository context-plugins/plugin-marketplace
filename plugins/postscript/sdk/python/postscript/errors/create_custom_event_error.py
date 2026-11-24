from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

CreateCustomEventErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomEventError:
    def map(self, status_code: int, content: bytes) -> CreateCustomEventErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


create_custom_event_error_mapper: Final[ErrorMapper[CreateCustomEventErrorBody]] = _CreateCustomEventError()
