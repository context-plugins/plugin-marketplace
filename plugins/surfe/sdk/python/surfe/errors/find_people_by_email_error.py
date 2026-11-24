from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FindPeopleByEmailErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FindPeopleByEmailError:
    def map(self, status_code: int, content: bytes) -> FindPeopleByEmailErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


find_people_by_email_error_mapper: Final[ErrorMapper[FindPeopleByEmailErrorBody]] = _FindPeopleByEmailError()
