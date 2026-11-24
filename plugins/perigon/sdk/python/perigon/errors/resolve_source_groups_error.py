from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ResolveSourceGroupsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ResolveSourceGroupsError:
    def map(self, status_code: int, content: bytes) -> ResolveSourceGroupsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


resolve_source_groups_error_mapper: Final[ErrorMapper[ResolveSourceGroupsErrorBody]] = _ResolveSourceGroupsError()
