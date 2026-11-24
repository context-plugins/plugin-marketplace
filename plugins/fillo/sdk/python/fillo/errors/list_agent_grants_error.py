from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAgentGrantsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAgentGrantsError:
    def map(self, status_code: int, content: bytes) -> ListAgentGrantsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_agent_grants_error_mapper: Final[ErrorMapper[ListAgentGrantsErrorBody]] = _ListAgentGrantsError()
