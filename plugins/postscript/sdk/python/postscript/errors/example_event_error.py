from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

ExampleEventErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _ExampleEventError:
    def map(self, status_code: int, content: bytes) -> ExampleEventErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


example_event_error_mapper: Final[ErrorMapper[ExampleEventErrorBody]] = _ExampleEventError()
