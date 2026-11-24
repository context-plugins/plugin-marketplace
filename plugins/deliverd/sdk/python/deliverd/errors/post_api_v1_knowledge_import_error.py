from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1KnowledgeImportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1KnowledgeImportError:
    def map(self, status_code: int, content: bytes) -> PostApiV1KnowledgeImportErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_knowledge_import_error_mapper: Final[
    ErrorMapper[PostApiV1KnowledgeImportErrorBody]
] = _PostApiV1KnowledgeImportError()
