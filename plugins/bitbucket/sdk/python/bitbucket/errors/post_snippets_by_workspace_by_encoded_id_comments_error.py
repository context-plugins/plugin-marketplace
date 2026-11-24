from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostSnippetsByWorkspaceByEncodedIdCommentsError:
    def map(self, status_code: int, content: bytes) -> PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_snippets_by_workspace_by_encoded_id_comments_error_mapper: Final[
    ErrorMapper[PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody]
] = _PostSnippetsByWorkspaceByEncodedIdCommentsError()
