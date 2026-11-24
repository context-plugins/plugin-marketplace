from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteResourceTreeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteResourceTreeError:
    def map(self, status_code: int, content: bytes) -> DeleteResourceTreeErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_resource_tree_error_mapper: Final[ErrorMapper[DeleteResourceTreeErrorBody]] = _DeleteResourceTreeError()
