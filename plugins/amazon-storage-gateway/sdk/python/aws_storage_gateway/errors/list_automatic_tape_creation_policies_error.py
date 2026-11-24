from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListAutomaticTapeCreationPoliciesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListAutomaticTapeCreationPoliciesError:
    def map(self, status_code: int, content: bytes) -> ListAutomaticTapeCreationPoliciesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_automatic_tape_creation_policies_error_mapper: Final[
    ErrorMapper[ListAutomaticTapeCreationPoliciesErrorBody]
] = _ListAutomaticTapeCreationPoliciesError()
