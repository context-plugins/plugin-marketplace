from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_liveops401_error1 import PlayLiveops401Error1

GetEventsPlayLiveopsGet2ErrorBody: TypeAlias = PlayLiveops401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetEventsPlayLiveopsGet2Error:
    def map(self, status_code: int, content: bytes) -> GetEventsPlayLiveopsGet2ErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayLiveops401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_events_play_liveops_get2_error_mapper: Final[
    ErrorMapper[GetEventsPlayLiveopsGet2ErrorBody]
] = _GetEventsPlayLiveopsGet2Error()
