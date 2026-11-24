from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddTagsToResourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddTagsToResourceError:
    def map(self, status_code: int, content: bytes) -> AddTagsToResourceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_tags_to_resource_error_mapper: Final[ErrorMapper[AddTagsToResourceErrorBody]] = _AddTagsToResourceError()
