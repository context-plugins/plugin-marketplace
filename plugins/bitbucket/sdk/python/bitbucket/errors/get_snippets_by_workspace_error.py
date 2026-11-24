from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceErrorBody]
] = _GetSnippetsByWorkspaceError()
