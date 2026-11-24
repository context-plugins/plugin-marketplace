from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWholesaleStatesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWholesaleStatesError:
    def map(self, status_code: int, content: bytes) -> ListWholesaleStatesErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_wholesale_states_error_mapper: Final[ErrorMapper[ListWholesaleStatesErrorBody]] = _ListWholesaleStatesError()
