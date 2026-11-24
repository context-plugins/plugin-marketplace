from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListProjectPoliciesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListProjectPoliciesError:
    def map(self, status_code: int, content: bytes) -> ListProjectPoliciesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_project_policies_error_mapper: Final[ErrorMapper[ListProjectPoliciesErrorBody]] = _ListProjectPoliciesError()
