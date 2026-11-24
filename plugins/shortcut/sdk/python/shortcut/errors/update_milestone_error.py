from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateMilestoneErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateMilestoneError:
    def map(self, status_code: int, content: bytes) -> UpdateMilestoneErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_milestone_error_mapper: Final[ErrorMapper[UpdateMilestoneErrorBody]] = _UpdateMilestoneError()
