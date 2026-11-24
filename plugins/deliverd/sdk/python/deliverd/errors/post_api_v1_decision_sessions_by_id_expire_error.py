from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1DecisionSessionsByIdExpireErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1DecisionSessionsByIdExpireError:
    def map(self, status_code: int, content: bytes) -> PostApiV1DecisionSessionsByIdExpireErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_decision_sessions_by_id_expire_error_mapper: Final[
    ErrorMapper[PostApiV1DecisionSessionsByIdExpireErrorBody]
] = _PostApiV1DecisionSessionsByIdExpireError()
