from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1AiSystemsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1AiSystemsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1AiSystemsErrorBody:
        match status_code:
            case 400 | 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_ai_systems_error_mapper: Final[ErrorMapper[PostApiV1AiSystemsErrorBody]] = _PostApiV1AiSystemsError()
