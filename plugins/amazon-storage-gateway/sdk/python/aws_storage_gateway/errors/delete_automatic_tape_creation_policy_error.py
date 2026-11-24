from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteAutomaticTapeCreationPolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteAutomaticTapeCreationPolicyError:
    def map(self, status_code: int, content: bytes) -> DeleteAutomaticTapeCreationPolicyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_automatic_tape_creation_policy_error_mapper: Final[
    ErrorMapper[DeleteAutomaticTapeCreationPolicyErrorBody]
] = _DeleteAutomaticTapeCreationPolicyError()
