from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPeopleByIdsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPeopleByIdsError:
    def map(self, status_code: int, content: bytes) -> GetPeopleByIdsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_people_by_ids_error_mapper: Final[ErrorMapper[GetPeopleByIdsErrorBody]] = _GetPeopleByIdsError()
