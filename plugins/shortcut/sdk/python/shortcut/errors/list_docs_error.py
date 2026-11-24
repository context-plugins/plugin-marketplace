from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError

ListDocsErrorBody: TypeAlias = DisabledFeatureError | RawError


@dataclass(frozen=True, slots=True)
class _ListDocsError:
    def map(self, status_code: int, content: bytes) -> ListDocsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case _:
                return RawError(status_code, content)


list_docs_error_mapper: Final[ErrorMapper[ListDocsErrorBody]] = _ListDocsError()
