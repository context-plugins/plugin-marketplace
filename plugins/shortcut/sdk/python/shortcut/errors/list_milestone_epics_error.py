from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMilestoneEpicsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMilestoneEpicsError:
    def map(self, status_code: int, content: bytes) -> ListMilestoneEpicsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_milestone_epics_error_mapper: Final[ErrorMapper[ListMilestoneEpicsErrorBody]] = _ListMilestoneEpicsError()
