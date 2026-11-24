from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdWatchersError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_watchers_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdWatchersError()
