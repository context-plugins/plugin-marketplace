from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostSnippetsByWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostSnippetsByWorkspaceError:
    def map(self, status_code: int, content: bytes) -> PostSnippetsByWorkspaceErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_snippets_by_workspace_error_mapper: Final[
    ErrorMapper[PostSnippetsByWorkspaceErrorBody]
] = _PostSnippetsByWorkspaceError()
