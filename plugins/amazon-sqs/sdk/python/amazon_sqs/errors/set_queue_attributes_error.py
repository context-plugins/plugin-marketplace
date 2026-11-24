from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SetQueueAttributesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SetQueueAttributesError:
    def map(self, status_code: int, content: bytes) -> SetQueueAttributesErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


set_queue_attributes_error_mapper: Final[ErrorMapper[SetQueueAttributesErrorBody]] = _SetQueueAttributesError()
