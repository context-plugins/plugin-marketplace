from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ScreenErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ScreenError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ScreenErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_screen_error_mapper: Final[ErrorMapper[PostApiV1ScreenErrorBody]] = _PostApiV1ScreenError()
