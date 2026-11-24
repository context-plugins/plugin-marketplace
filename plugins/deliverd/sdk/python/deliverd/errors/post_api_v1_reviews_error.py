from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ReviewsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ReviewsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ReviewsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_reviews_error_mapper: Final[ErrorMapper[PostApiV1ReviewsErrorBody]] = _PostApiV1ReviewsError()
