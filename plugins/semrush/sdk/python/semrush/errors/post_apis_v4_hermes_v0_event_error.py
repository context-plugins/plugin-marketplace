from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

PostApisV4HermesV0EventErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _PostApisV4HermesV0EventError:
    def map(self, status_code: int, content: bytes) -> PostApisV4HermesV0EventErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_apis_v4_hermes_v0_event_error_mapper: Final[
    ErrorMapper[PostApisV4HermesV0EventErrorBody]
] = _PostApisV4HermesV0EventError()
