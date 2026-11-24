from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.events_types400_error1 import EventsTypes400Error1
from ..models.events_types401_error1 import EventsTypes401Error1
from ..models.events_types403_error1 import EventsTypes403Error1
from ..models.events_types404_error1 import EventsTypes404Error1
from ..models.events_types429_error1 import EventsTypes429Error1
from ..models.events_types500_error1 import EventsTypes500Error1
from ..models.events_types503_error1 import EventsTypes503Error1

GetEventTypeByIdErrorBody: TypeAlias = (
    EventsTypes400Error1
    | EventsTypes401Error1
    | EventsTypes403Error1
    | EventsTypes404Error1
    | EventsTypes429Error1
    | EventsTypes500Error1
    | EventsTypes503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetEventTypeByIdError:
    def map(self, status_code: int, content: bytes) -> GetEventTypeByIdErrorBody:
        match status_code:
            case 400:
                return decode_json[EventsTypes400Error1](content)
            case 401:
                return decode_json[EventsTypes401Error1](content)
            case 403:
                return decode_json[EventsTypes403Error1](content)
            case 404:
                return decode_json[EventsTypes404Error1](content)
            case 429:
                return decode_json[EventsTypes429Error1](content)
            case 500:
                return decode_json[EventsTypes500Error1](content)
            case 503:
                return decode_json[EventsTypes503Error1](content)
            case _:
                return RawError(status_code, content)


get_event_type_by_id_error_mapper: Final[ErrorMapper[GetEventTypeByIdErrorBody]] = _GetEventTypeByIdError()
