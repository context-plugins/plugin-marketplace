from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdWatchErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdWatchError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdWatchErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_watch_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdWatchErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdWatchError()
