from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

PostVersionsPublishAnonErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _PostVersionsPublishAnonError:
    def map(self, status_code: int, content: bytes) -> PostVersionsPublishAnonErrorBody:
        match status_code:
            case 400 | 401 | 404 | 500:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


post_versions_publish_anon_error_mapper: Final[
    ErrorMapper[PostVersionsPublishAnonErrorBody]
] = _PostVersionsPublishAnonError()
