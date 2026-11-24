from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListResiliencyGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListResiliencyGroupsError:
    def map(self, status_code: int, content: bytes) -> ListResiliencyGroupsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_resiliency_groups_error_mapper: Final[ErrorMapper[ListResiliencyGroupsErrorBody]] = _ListResiliencyGroupsError()
