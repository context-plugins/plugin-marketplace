from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RemoveTagsFromResourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RemoveTagsFromResourceError:
    def map(self, status_code: int, content: bytes) -> RemoveTagsFromResourceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


remove_tags_from_resource_error_mapper: Final[
    ErrorMapper[RemoveTagsFromResourceErrorBody]
] = _RemoveTagsFromResourceError()
