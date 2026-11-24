from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.events400_error1 import Events400Error1
from ..models.events401_error1 import Events401Error1
from ..models.events403_error1 import Events403Error1
from ..models.events404_error1 import Events404Error1
from ..models.events500_error1 import Events500Error1
from ..models.events503_error1 import Events503Error1

GetEventsErrorBody: TypeAlias = (
    Events400Error1 | Events401Error1 | Events403Error1 | Events404Error1 | Events500Error1 | Events503Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetEventsError:
    def map(self, status_code: int, content: bytes) -> GetEventsErrorBody:
        match status_code:
            case 400:
                return decode_json[Events400Error1](content)
            case 401:
                return decode_json[Events401Error1](content)
            case 403:
                return decode_json[Events403Error1](content)
            case 404:
                return decode_json[Events404Error1](content)
            case 500:
                return decode_json[Events500Error1](content)
            case 503:
                return decode_json[Events503Error1](content)
            case _:
                return RawError(status_code, content)


get_events_error_mapper: Final[ErrorMapper[GetEventsErrorBody]] = _GetEventsError()
