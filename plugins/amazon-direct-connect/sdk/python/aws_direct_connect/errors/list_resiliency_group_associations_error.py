from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListResiliencyGroupAssociationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListResiliencyGroupAssociationsError:
    def map(self, status_code: int, content: bytes) -> ListResiliencyGroupAssociationsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_resiliency_group_associations_error_mapper: Final[
    ErrorMapper[ListResiliencyGroupAssociationsErrorBody]
] = _ListResiliencyGroupAssociationsError()
