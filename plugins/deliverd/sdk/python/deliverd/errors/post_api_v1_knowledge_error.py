from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1KnowledgeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1KnowledgeError:
    def map(self, status_code: int, content: bytes) -> PostApiV1KnowledgeErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_knowledge_error_mapper: Final[ErrorMapper[PostApiV1KnowledgeErrorBody]] = _PostApiV1KnowledgeError()
