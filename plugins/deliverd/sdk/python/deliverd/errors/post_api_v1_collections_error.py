from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1CollectionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1CollectionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1CollectionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_collections_error_mapper: Final[ErrorMapper[PostApiV1CollectionsErrorBody]] = _PostApiV1CollectionsError()
