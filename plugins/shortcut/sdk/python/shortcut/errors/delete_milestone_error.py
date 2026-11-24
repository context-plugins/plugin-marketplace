from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMilestoneErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMilestoneError:
    def map(self, status_code: int, content: bytes) -> DeleteMilestoneErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_milestone_error_mapper: Final[ErrorMapper[DeleteMilestoneErrorBody]] = _DeleteMilestoneError()
