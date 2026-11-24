from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSnippetsByWorkspaceByEncodedIdWatchError:
    def map(self, status_code: int, content: bytes) -> DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_snippets_by_workspace_by_encoded_id_watch_error_mapper: Final[
    ErrorMapper[DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody]
] = _DeleteSnippetsByWorkspaceByEncodedIdWatchError()
