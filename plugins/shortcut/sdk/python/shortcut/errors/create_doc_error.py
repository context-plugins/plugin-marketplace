from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError

CreateDocErrorBody: TypeAlias = DisabledFeatureError | RawError


@dataclass(frozen=True, slots=True)
class _CreateDocError:
    def map(self, status_code: int, content: bytes) -> CreateDocErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case _:
                return RawError(status_code, content)


create_doc_error_mapper: Final[ErrorMapper[CreateDocErrorBody]] = _CreateDocError()
