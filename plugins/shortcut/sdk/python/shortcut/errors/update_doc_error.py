from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError

UpdateDocErrorBody: TypeAlias = DisabledFeatureError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateDocError:
    def map(self, status_code: int, content: bytes) -> UpdateDocErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case _:
                return RawError(status_code, content)


update_doc_error_mapper: Final[ErrorMapper[UpdateDocErrorBody]] = _UpdateDocError()
