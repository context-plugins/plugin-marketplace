from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateAutomaticTapeCreationPolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateAutomaticTapeCreationPolicyError:
    def map(self, status_code: int, content: bytes) -> UpdateAutomaticTapeCreationPolicyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_automatic_tape_creation_policy_error_mapper: Final[
    ErrorMapper[UpdateAutomaticTapeCreationPolicyErrorBody]
] = _UpdateAutomaticTapeCreationPolicyError()
