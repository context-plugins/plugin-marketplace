from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ChangeMessageVisibilityBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ChangeMessageVisibilityBatchError:
    def map(self, status_code: int, content: bytes) -> ChangeMessageVisibilityBatchErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


change_message_visibility_batch_error_mapper: Final[
    ErrorMapper[ChangeMessageVisibilityBatchErrorBody]
] = _ChangeMessageVisibilityBatchError()
