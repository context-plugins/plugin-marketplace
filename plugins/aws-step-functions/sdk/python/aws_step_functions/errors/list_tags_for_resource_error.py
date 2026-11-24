from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTagsForResourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTagsForResourceError:
    def map(self, status_code: int, content: bytes) -> ListTagsForResourceErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_tags_for_resource_error_mapper: Final[ErrorMapper[ListTagsForResourceErrorBody]] = _ListTagsForResourceError()
