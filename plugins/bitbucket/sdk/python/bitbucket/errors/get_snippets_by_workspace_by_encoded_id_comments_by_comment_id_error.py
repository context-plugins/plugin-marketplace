from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError()
