from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError

GetDocErrorBody: TypeAlias = DisabledFeatureError | RawError


@dataclass(frozen=True, slots=True)
class _GetDocError:
    def map(self, status_code: int, content: bytes) -> GetDocErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case _:
                return RawError(status_code, content)


get_doc_error_mapper: Final[ErrorMapper[GetDocErrorBody]] = _GetDocError()
