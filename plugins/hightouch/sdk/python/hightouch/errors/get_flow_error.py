from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetFlowErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetFlowError:
    def map(self, status_code: int, content: bytes) -> GetFlowErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_flow_error_mapper: Final[ErrorMapper[GetFlowErrorBody]] = _GetFlowError()
