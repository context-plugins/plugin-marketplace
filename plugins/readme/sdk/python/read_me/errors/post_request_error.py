from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostRequestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostRequestError:
    def map(self, status_code: int, content: bytes) -> PostRequestErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_request_error_mapper: Final[ErrorMapper[PostRequestErrorBody]] = _PostRequestError()
