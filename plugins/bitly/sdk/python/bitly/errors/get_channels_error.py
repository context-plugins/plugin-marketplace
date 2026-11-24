from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetChannelsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetChannelsError:
    def map(self, status_code: int, content: bytes) -> GetChannelsErrorBody:
        match status_code:
            case 402 | 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_channels_error_mapper: Final[ErrorMapper[GetChannelsErrorBody]] = _GetChannelsError()
