from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1FlowsByIdCompleteErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1FlowsByIdCompleteError:
    def map(self, status_code: int, content: bytes) -> PostApiV1FlowsByIdCompleteErrorBody:
        match status_code:
            case 403 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_flows_by_id_complete_error_mapper: Final[
    ErrorMapper[PostApiV1FlowsByIdCompleteErrorBody]
] = _PostApiV1FlowsByIdCompleteError()
