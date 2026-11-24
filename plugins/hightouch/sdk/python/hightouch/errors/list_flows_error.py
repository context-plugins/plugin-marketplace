from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFlowsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFlowsError:
    def map(self, status_code: int, content: bytes) -> ListFlowsErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_flows_error_mapper: Final[ErrorMapper[ListFlowsErrorBody]] = _ListFlowsError()
