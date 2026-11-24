from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetSubscribersErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetSubscribersError:
    def map(self, status_code: int, content: bytes) -> GetSubscribersErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_subscribers_error_mapper: Final[ErrorMapper[GetSubscribersErrorBody]] = _GetSubscribersError()
