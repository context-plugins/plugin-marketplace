from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.events_types401_error1 import EventsTypes401Error1
from ..models.events_types403_error1 import EventsTypes403Error1
from ..models.events_types429_error1 import EventsTypes429Error1
from ..models.events_types500_error1 import EventsTypes500Error1
from ..models.events_types503_error1 import EventsTypes503Error1

ListEventTypesErrorBody: TypeAlias = (
    EventsTypes401Error1
    | EventsTypes403Error1
    | EventsTypes429Error1
    | EventsTypes500Error1
    | EventsTypes503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ListEventTypesError:
    def map(self, status_code: int, content: bytes) -> ListEventTypesErrorBody:
        match status_code:
            case 401:
                return decode_json[EventsTypes401Error1](content)
            case 403:
                return decode_json[EventsTypes403Error1](content)
            case 429:
                return decode_json[EventsTypes429Error1](content)
            case 500:
                return decode_json[EventsTypes500Error1](content)
            case 503:
                return decode_json[EventsTypes503Error1](content)
            case _:
                return RawError(status_code, content)


list_event_types_error_mapper: Final[ErrorMapper[ListEventTypesErrorBody]] = _ListEventTypesError()
