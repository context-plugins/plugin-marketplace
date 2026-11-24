from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAccountTeamErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAccountTeamError:
    def map(self, status_code: int, content: bytes) -> ListAccountTeamErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_account_team_error_mapper: Final[ErrorMapper[ListAccountTeamErrorBody]] = _ListAccountTeamError()
