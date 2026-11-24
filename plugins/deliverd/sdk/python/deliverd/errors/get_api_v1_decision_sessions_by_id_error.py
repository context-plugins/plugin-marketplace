from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1DecisionSessionsByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1DecisionSessionsByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1DecisionSessionsByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_decision_sessions_by_id_error_mapper: Final[
    ErrorMapper[GetApiV1DecisionSessionsByIdErrorBody]
] = _GetApiV1DecisionSessionsByIdError()
