from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError
from ..models.unprocessable_error import UnprocessableError

LinkDocumentToEpicErrorBody: TypeAlias = DisabledFeatureError | UnprocessableError | RawError


@dataclass(frozen=True, slots=True)
class _LinkDocumentToEpicError:
    def map(self, status_code: int, content: bytes) -> LinkDocumentToEpicErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case 422:
                return decode_json[UnprocessableError](content)
            case _:
                return RawError(status_code, content)


link_document_to_epic_error_mapper: Final[ErrorMapper[LinkDocumentToEpicErrorBody]] = _LinkDocumentToEpicError()
