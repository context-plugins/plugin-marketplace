from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetSubscriberErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetSubscriberError:
    def map(self, status_code: int, content: bytes) -> GetSubscriberErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_subscriber_error_mapper: Final[ErrorMapper[GetSubscriberErrorBody]] = _GetSubscriberError()
