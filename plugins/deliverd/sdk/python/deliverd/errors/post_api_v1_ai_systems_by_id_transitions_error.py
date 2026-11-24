from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1AiSystemsByIdTransitionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1AiSystemsByIdTransitionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1AiSystemsByIdTransitionsErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_ai_systems_by_id_transitions_error_mapper: Final[
    ErrorMapper[PostApiV1AiSystemsByIdTransitionsErrorBody]
] = _PostApiV1AiSystemsByIdTransitionsError()
