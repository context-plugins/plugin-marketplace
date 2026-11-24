from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1AiSystemsByIdModelChangeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1AiSystemsByIdModelChangeError:
    def map(self, status_code: int, content: bytes) -> PostApiV1AiSystemsByIdModelChangeErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_ai_systems_by_id_model_change_error_mapper: Final[
    ErrorMapper[PostApiV1AiSystemsByIdModelChangeErrorBody]
] = _PostApiV1AiSystemsByIdModelChangeError()
