from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWholesaleAreasErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWholesaleAreasError:
    def map(self, status_code: int, content: bytes) -> ListWholesaleAreasErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_wholesale_areas_error_mapper: Final[ErrorMapper[ListWholesaleAreasErrorBody]] = _ListWholesaleAreasError()
